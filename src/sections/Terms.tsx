import { Divider } from '@/components'

export function Terms() {
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
            Terms of Service
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
              1. Acceptance of Terms
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              By downloading, installing, or using rawctl ("the Software"), you agree to be bound by these Terms of Service.
              If you do not agree to these terms, do not use the Software.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              2. License
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              rawctl is open source software released under the <strong className="text-gold">MIT License</strong>.
              You are free to use, modify, and distribute the software in accordance with this license.
            </p>
            <div className="bg-foreground/5 p-4 rounded-lg border border-gold/20">
              <p className="text-foreground/70 text-sm font-mono">
                MIT License — Permission is hereby granted, free of charge, to any person obtaining a copy
                of this software and associated documentation files, to deal in the Software without restriction,
                including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense,
                and/or sell copies of the Software.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              3. Free Features
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              All core editing features of rawctl are free and will remain free forever. These include:
            </p>
            <ul className="space-y-2 text-foreground/80 mt-4">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>RAW photo processing and editing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Non-destructive sidecar editing</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Photo organization (ratings, flags, labels, tags)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Export to JPG/PNG/TIFF</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>All future core editing features</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              4. Paid Services (AI Features)
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Optional AI-powered features (NanoBanana) require credits, which can be obtained through:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Monthly subscription plans</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>One-time credit purchases</span>
              </li>
            </ul>

            <h3 className="font-display text-lg text-foreground tracking-wider mb-3 mt-6">
              Refund Policy
            </h3>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Subscriptions can be canceled anytime; access continues until period end</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Credit purchases are non-refundable once used</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Unused credits from purchases do not expire</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              5. Anonymous Analytics
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              rawctl may collect anonymous usage analytics to improve the software. By enabling analytics, you agree to:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Share anonymous feature usage statistics</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Allow aggregated data to inform product development</span>
              </li>
            </ul>
            <p className="text-foreground/60 mt-4 text-sm">
              Analytics is opt-in and can be disabled anytime in Settings → Analytics.
              See our <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a> for details on what we collect.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              6. User Responsibilities
            </h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              You agree to:
            </p>
            <ul className="space-y-2 text-foreground/80">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Use the software in compliance with applicable laws</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Not use AI features to generate illegal or harmful content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Maintain the security of your account credentials</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Back up your photos — rawctl is not a backup solution</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              7. Disclaimers
            </h2>
            <div className="bg-foreground/5 p-4 rounded-lg border border-gold/20">
              <p className="text-foreground/70 text-sm uppercase tracking-wider">
                THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
                INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
                FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY.
              </p>
            </div>
            <p className="text-foreground/80 leading-relaxed mt-4">
              We recommend maintaining backups of your original photos.
              While rawctl uses non-destructive editing, we are not responsible for data loss.
            </p>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              8. Service Availability
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              While we strive for high availability of AI services and account features:
            </p>
            <ul className="space-y-2 text-foreground/80 mt-4">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Services may be temporarily unavailable for maintenance</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>We do not guarantee uninterrupted access to cloud features</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Core editing features work fully offline</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              We may update these terms from time to time. Significant changes will be communicated through:
            </p>
            <ul className="space-y-2 text-foreground/80 mt-4">
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>In-app notification</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Email to registered users</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold mt-1">◆</span>
                <span>Updated date on this page</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl text-foreground tracking-wider mb-4">
              10. Contact
            </h2>
            <p className="text-foreground/80 leading-relaxed">
              Questions about these terms? Email us at{' '}
              <a href="mailto:legal@rawctl.com" className="text-gold hover:underline">
                legal@rawctl.com
              </a>
            </p>
          </section>
        </div>

        <Divider className="my-12" />

        <p className="text-center text-muted text-sm">
          <span className="text-gold/50">◇</span> Your photos, your freedom <span className="text-gold/50">◇</span>
        </p>
      </div>
    </div>
  )
}
