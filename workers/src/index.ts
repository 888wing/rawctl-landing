/**
 * rawctl Data Collection API
 * Stores email subscriptions, feature requests, and feedback in Cloudflare R2
 */

interface Env {
  DATA_BUCKET: R2Bucket
  CORS_ORIGIN: string
}

// Data file paths in R2
const PATHS = {
  emails: 'data/email-subscriptions.json',
  features: 'data/feature-requests.json',
  feedback: 'data/feedback.json',
}

// CORS headers
function corsHeaders(origin: string): HeadersInit {
  return {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }
}

// Read JSON array from R2
async function readData<T>(bucket: R2Bucket, path: string): Promise<T[]> {
  const object = await bucket.get(path)
  if (!object) return []
  const text = await object.text()
  try {
    return JSON.parse(text)
  } catch {
    return []
  }
}

// Write JSON array to R2
async function writeData<T>(bucket: R2Bucket, path: string, data: T[]): Promise<void> {
  await bucket.put(path, JSON.stringify(data, null, 2), {
    httpMetadata: { contentType: 'application/json' },
  })
}

// Email subscription handler
async function handleEmailSubscription(request: Request, env: Env): Promise<Response> {
  const { email, source = 'landing' } = await request.json() as { email: string; source?: string }

  if (!email || !email.includes('@')) {
    return Response.json({ error: 'Invalid email address' }, { status: 400 })
  }

  const emails = await readData<EmailSubscription>(env.DATA_BUCKET, PATHS.emails)

  // Check for duplicate
  if (emails.some(e => e.email.toLowerCase() === email.toLowerCase())) {
    return Response.json({ success: true, message: 'Already subscribed' })
  }

  const newEntry: EmailSubscription = {
    id: crypto.randomUUID(),
    email: email.toLowerCase(),
    source,
    subscribedAt: new Date().toISOString(),
    confirmed: false,
  }

  emails.push(newEntry)
  await writeData(env.DATA_BUCKET, PATHS.emails, emails)

  return Response.json({ success: true, message: 'Subscribed successfully' })
}

// Feature request handler
async function handleFeatureRequest(request: Request, env: Env): Promise<Response> {
  const body = await request.json() as FeatureRequestInput

  if (!body.features || body.features.length === 0) {
    return Response.json({ error: 'No features selected' }, { status: 400 })
  }

  const requests = await readData<FeatureRequest>(env.DATA_BUCKET, PATHS.features)

  const newEntry: FeatureRequest = {
    id: crypto.randomUUID(),
    features: body.features,
    otherFeature: body.otherFeature || null,
    email: body.email || null,
    submittedAt: new Date().toISOString(),
    userAgent: request.headers.get('User-Agent') || 'unknown',
  }

  requests.push(newEntry)
  await writeData(env.DATA_BUCKET, PATHS.features, requests)

  return Response.json({ success: true, message: 'Thank you for your feedback!' })
}

// Feedback handler
async function handleFeedback(request: Request, env: Env): Promise<Response> {
  const body = await request.json() as FeedbackInput

  if (!body.message || body.message.trim().length < 10) {
    return Response.json({ error: 'Feedback too short (min 10 characters)' }, { status: 400 })
  }

  const feedbacks = await readData<Feedback>(env.DATA_BUCKET, PATHS.feedback)

  const newEntry: Feedback = {
    id: crypto.randomUUID(),
    type: body.type || 'general',
    message: body.message.trim(),
    email: body.email || null,
    rating: body.rating || null,
    submittedAt: new Date().toISOString(),
    userAgent: request.headers.get('User-Agent') || 'unknown',
    appVersion: body.appVersion || null,
  }

  feedbacks.push(newEntry)
  await writeData(env.DATA_BUCKET, PATHS.feedback, feedbacks)

  return Response.json({ success: true, message: 'Feedback received!' })
}

// Stats endpoint (for admin)
async function handleStats(env: Env): Promise<Response> {
  const [emails, features, feedbacks] = await Promise.all([
    readData<EmailSubscription>(env.DATA_BUCKET, PATHS.emails),
    readData<FeatureRequest>(env.DATA_BUCKET, PATHS.features),
    readData<Feedback>(env.DATA_BUCKET, PATHS.feedback),
  ])

  // Aggregate feature votes
  const featureVotes: Record<string, number> = {}
  for (const req of features) {
    for (const feature of req.features) {
      featureVotes[feature] = (featureVotes[feature] || 0) + 1
    }
  }

  // Sort by votes
  const topFeatures = Object.entries(featureVotes)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)

  return Response.json({
    emailCount: emails.length,
    featureRequestCount: features.length,
    feedbackCount: feedbacks.length,
    topFeatures,
    lastUpdated: new Date().toISOString(),
  })
}

// Export data endpoint (for admin - sends digest)
async function handleExport(env: Env, type: string): Promise<Response> {
  const path = PATHS[type as keyof typeof PATHS]
  if (!path) {
    return Response.json({ error: 'Invalid type' }, { status: 400 })
  }

  const data = await readData(env.DATA_BUCKET, path)
  return Response.json(data)
}

// Main request handler
export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url)
    const origin = request.headers.get('Origin') || env.CORS_ORIGIN
    const headers = corsHeaders(origin)

    // Handle CORS preflight
    if (request.method === 'OPTIONS') {
      return new Response(null, { headers })
    }

    try {
      let response: Response

      // Route handling
      switch (url.pathname) {
        case '/api/subscribe':
          if (request.method !== 'POST') {
            response = Response.json({ error: 'Method not allowed' }, { status: 405 })
          } else {
            response = await handleEmailSubscription(request, env)
          }
          break

        case '/api/feature-request':
          if (request.method !== 'POST') {
            response = Response.json({ error: 'Method not allowed' }, { status: 405 })
          } else {
            response = await handleFeatureRequest(request, env)
          }
          break

        case '/api/feedback':
          if (request.method !== 'POST') {
            response = Response.json({ error: 'Method not allowed' }, { status: 405 })
          } else {
            response = await handleFeedback(request, env)
          }
          break

        case '/api/stats':
          response = await handleStats(env)
          break

        case '/api/export/emails':
          response = await handleExport(env, 'emails')
          break

        case '/api/export/features':
          response = await handleExport(env, 'features')
          break

        case '/api/export/feedback':
          response = await handleExport(env, 'feedback')
          break

        default:
          response = Response.json({ error: 'Not found' }, { status: 404 })
      }

      // Add CORS headers to response
      const newHeaders = new Headers(response.headers)
      Object.entries(headers).forEach(([key, value]) => newHeaders.set(key, value))

      return new Response(response.body, {
        status: response.status,
        headers: newHeaders,
      })
    } catch (error) {
      console.error('API Error:', error)
      return Response.json(
        { error: 'Internal server error' },
        { status: 500, headers }
      )
    }
  },
}

// Type definitions
interface EmailSubscription {
  id: string
  email: string
  source: string
  subscribedAt: string
  confirmed: boolean
}

interface FeatureRequestInput {
  features: string[]
  otherFeature?: string
  email?: string
}

interface FeatureRequest {
  id: string
  features: string[]
  otherFeature: string | null
  email: string | null
  submittedAt: string
  userAgent: string
}

interface FeedbackInput {
  type?: 'bug' | 'suggestion' | 'praise' | 'general'
  message: string
  email?: string
  rating?: number
  appVersion?: string
}

interface Feedback {
  id: string
  type: string
  message: string
  email: string | null
  rating: number | null
  submittedAt: string
  userAgent: string
  appVersion: string | null
}
