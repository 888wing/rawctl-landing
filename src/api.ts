/**
 * API client for rawctl data collection
 */

const API_BASE = import.meta.env.PROD
  ? 'https://api.rawctl.app'  // Production API URL
  : 'http://localhost:8787'   // Local development

interface ApiResponse<T = unknown> {
  success: boolean
  message?: string
  error?: string
  data?: T
}

async function apiCall<T>(
  endpoint: string,
  data: unknown
): Promise<ApiResponse<T>> {
  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const result = await response.json()

    if (!response.ok) {
      return { success: false, error: result.error || 'Request failed' }
    }

    return { success: true, ...result }
  } catch (error) {
    console.error('API Error:', error)
    return { success: false, error: 'Network error. Please try again.' }
  }
}

// Email subscription
export async function subscribeEmail(email: string, source = 'landing') {
  return apiCall('/api/subscribe', { email, source })
}

// Feature request
export interface FeatureRequestData {
  features: string[]
  otherFeature?: string
  email?: string
}

export async function submitFeatureRequest(data: FeatureRequestData) {
  return apiCall('/api/feature-request', data)
}

// Feedback
export interface FeedbackData {
  type?: 'bug' | 'suggestion' | 'praise' | 'general'
  message: string
  email?: string
  rating?: number
  appVersion?: string
}

export async function submitFeedback(data: FeedbackData) {
  return apiCall('/api/feedback', data)
}
