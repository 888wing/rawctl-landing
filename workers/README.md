# rawctl API Workers

Cloudflare Workers backend for rawctl landing page data collection.

## Features

- **Email Subscriptions**: Collect newsletter signups
- **Feature Requests**: Survey for feature prioritization
- **Feedback Collection**: Bug reports, suggestions, and praise
- **Data Storage**: All data stored in Cloudflare R2

## Setup

### 1. Create R2 Bucket

```bash
wrangler r2 bucket create rawctl-data
```

### 2. Configure Secrets (Optional, for email delivery)

```bash
# For email digests via Resend
wrangler secret put RESEND_API_KEY
wrangler secret put ADMIN_EMAIL
```

### 3. Deploy

```bash
cd workers
npm install
npm run deploy
```

## API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/subscribe` | POST | Subscribe to newsletter |
| `/api/feature-request` | POST | Submit feature votes |
| `/api/feedback` | POST | Submit feedback |
| `/api/stats` | GET | Get aggregate statistics |
| `/api/export/emails` | GET | Export email list |
| `/api/export/features` | GET | Export feature requests |
| `/api/export/feedback` | GET | Export all feedback |

## Notification Options

### Option 1: Email Digest via Resend (Recommended)

Best for: Getting a daily/weekly summary email.

1. Sign up at [resend.com](https://resend.com)
2. Create an API key
3. Add secrets to Cloudflare:
   ```bash
   wrangler secret put RESEND_API_KEY
   wrangler secret put ADMIN_EMAIL
   ```
4. Add cron trigger to `wrangler.toml`:
   ```toml
   [triggers]
   crons = ["0 9 * * *"]  # Daily at 9am UTC
   ```
5. Deploy: `npm run deploy`

### Option 2: Webhook to n8n/Make/Zapier

Best for: Custom workflows and integrations.

Add a webhook endpoint that forwards to your automation platform:

```typescript
// In index.ts, add:
case '/api/webhook/notify':
  // Forward to n8n, Make, or Zapier
  await fetch('YOUR_WEBHOOK_URL', {
    method: 'POST',
    body: JSON.stringify(await request.json())
  })
  return Response.json({ success: true })
```

### Option 3: macOS Local Notifications

Best for: Desktop alerts without email.

Create a cron job on your Mac:

```bash
# Create script: ~/scripts/rawctl-digest.sh
#!/bin/bash
STATS=$(curl -s https://api.rawctl.app/api/stats)
EMAILS=$(echo $STATS | jq '.emailCount')
FEATURES=$(echo $STATS | jq '.featureRequestCount')
FEEDBACK=$(echo $STATS | jq '.feedbackCount')

osascript -e "display notification \"Emails: $EMAILS, Features: $FEATURES, Feedback: $FEEDBACK\" with title \"rawctl Stats\""
```

Add to crontab:
```bash
crontab -e
# Add: 0 9 * * * ~/scripts/rawctl-digest.sh
```

### Option 4: Telegram Bot

Best for: Mobile notifications.

1. Create bot via @BotFather
2. Get chat ID
3. Add to worker:

```typescript
async function sendTelegram(botToken: string, chatId: string, message: string) {
  await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chat_id: chatId, text: message, parse_mode: 'HTML' })
  })
}
```

### Option 5: RSS Feed

Best for: Following via any RSS reader.

Add RSS endpoint to worker:

```typescript
case '/api/feed.xml':
  const feedbacks = await readData(env.DATA_BUCKET, PATHS.feedback)
  const rss = generateRSSFeed(feedbacks)
  return new Response(rss, {
    headers: { 'Content-Type': 'application/xml' }
  })
```

## Data Structure

### Email Subscription
```json
{
  "id": "uuid",
  "email": "user@example.com",
  "source": "landing-newsletter",
  "subscribedAt": "2024-01-01T00:00:00Z",
  "confirmed": false
}
```

### Feature Request
```json
{
  "id": "uuid",
  "features": ["lens-correction", "presets"],
  "otherFeature": "Custom feature idea",
  "email": "optional@email.com",
  "submittedAt": "2024-01-01T00:00:00Z"
}
```

### Feedback
```json
{
  "id": "uuid",
  "type": "bug|suggestion|praise|general",
  "message": "Feedback content",
  "email": "optional@email.com",
  "rating": 5,
  "submittedAt": "2024-01-01T00:00:00Z"
}
```

## Manual Data Export

```bash
# Export all emails
curl https://api.rawctl.app/api/export/emails > emails.json

# Export feature requests
curl https://api.rawctl.app/api/export/features > features.json

# Export feedback
curl https://api.rawctl.app/api/export/feedback > feedback.json

# Trigger digest manually
curl https://api.rawctl.app/trigger-digest
```

## Development

```bash
npm run dev  # Start local dev server on :8787
```

## Security Notes

- Add authentication for export endpoints in production
- Consider rate limiting for public endpoints
- Use CORS restrictions to limit to your domain
