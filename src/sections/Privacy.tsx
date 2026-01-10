import { Divider } from '@/components'

export function Privacy() {
  return (
    <div className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <a href="/" className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors mb-8">
            <span>←</span>
            <span>Back to Home</span>
          </a>
          <h1 className="font-display text-4xl text-foreground tracking-art-deco mb-4">
            Privacy Policy
          </h1>
          <p className="text-muted">
            Last updated: January 2025
          </p>
        </div>

        <Divider className="mb-12" />

        {/* Content */}
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              Our Commitment to Privacy
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              rawctl is built on the principle of <strong className="text-gold">local-first, privacy-respecting</strong> software.
              Your photos stay on your machine. We don't have access to your files, and we never will.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              What We Don't Collect
            </h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Your photos, thumbnails, or any image data</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>File names, folder paths, or file locations</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Photo metadata (EXIF data, GPS coordinates, camera settings)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Personal information (name, address, phone number)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">✗</span>
                <span>Your IP address (not stored in analytics)</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              Anonymous Usage Analytics
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              If you choose to enable analytics (opt-in on first launch), we collect anonymous usage statistics to help improve rawctl.
              This data helps us understand which features matter most to photographers.
            </p>

            <h3 className="font-display text-lg text-foreground tracking-wider mb-3 mt-6">
              What We Collect (When Enabled)
            </h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Feature usage counts (e.g., "Tone Curve was opened 15 times")</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Editing patterns (e.g., "average 3.5 sliders adjusted per photo")</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Export completion rates (e.g., "85% of exports completed successfully")</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>App version and macOS version</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 mt-1">✓</span>
                <span>Language/region settings (for localization priorities)</span>
              </li>
            </ul>

            <h3 className="font-display text-lg text-foreground tracking-wider mb-3 mt-6">
              Your Control
            </h3>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Analytics is <strong>opt-in</strong> — you choose on first launch</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Toggle anytime in <strong>Settings → Analytics</strong></span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Disabling clears all locally stored analytics data</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              Account Data (Optional)
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              If you create an account for AI features (NanoBanana), we store:
            </p>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Email address (for authentication and receipts)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Subscription status and credits balance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Payment information (processed securely by Stripe)</span>
              </li>
            </ul>
            <p className="text-foreground/60 mt-4 text-sm">
              Note: You can use all core editing features without an account.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              AI Features (NanoBanana)
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              When using AI-powered features, your photo is temporarily sent to Google's Gemini API for processing.
              We do not store your photos — they are processed and immediately discarded.
            </p>
            <p className="text-foreground/60 text-sm">
              Google's privacy policy applies to AI processing. See:
              <a href="https://policies.google.com/privacy" className="text-gold hover:underline ml-1" target="_blank" rel="noopener noreferrer">
                Google Privacy Policy
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              Data Storage
            </h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span><strong>Edit data:</strong> Stored locally in sidecar JSON files next to your photos</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span><strong>Preferences:</strong> Stored locally in macOS UserDefaults</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span><strong>Account tokens:</strong> Stored securely in macOS Keychain</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span><strong>Analytics (if enabled):</strong> Aggregated, anonymized data on our servers</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              Third Parties
            </h2>
            <ul className="space-y-3 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span><strong>Stripe:</strong> Payment processing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span><strong>Google Gemini:</strong> AI image processing (opt-in)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span><strong>Cloudflare:</strong> API hosting and DDoS protection</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              Contact
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Questions about privacy? Email us at{' '}
              <a href="mailto:privacy@rawctl.com" className="text-gold hover:underline">
                privacy@rawctl.com
              </a>
            </p>
          </section>
        </div>

        <Divider className="my-12" />

        <p className="text-center text-muted text-sm">
          <span className="text-gold/50">◇</span> rawctl respects your privacy <span className="text-gold/50">◇</span>
        </p>
      </div>
    </div>
  )
}
