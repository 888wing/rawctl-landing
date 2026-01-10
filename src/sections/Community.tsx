import { motion } from 'framer-motion'
import { useState } from 'react'
import { Mail, MessageSquare, Lightbulb, Send, Check, Loader2 } from 'lucide-react'
import { SectionHeader, Button, Card, BlobBackground } from '@/components'
import { subscribeEmail, submitFeatureRequest, submitFeedback } from '@/api'

type TabType = 'newsletter' | 'features' | 'feedback'

const featureOptions = [
  { id: 'lens-correction', label: 'Lens Correction & Profiles' },
  { id: 'local-adjustments', label: 'Local Adjustments (Brushes/Gradients)' },
  { id: 'presets', label: 'User Presets & Preset Packs' },
  { id: 'batch-export', label: 'Batch Export Improvements' },
  { id: 'icloud-sync', label: 'iCloud Sync for Recipes' },
  { id: 'ai-masks', label: 'AI-Powered Selection Masks' },
  { id: 'tethering', label: 'Tethered Shooting Support' },
  { id: 'plugins', label: 'Plugin System / Extensions' },
  { id: 'ios-app', label: 'iOS Companion App' },
  { id: 'lr-import', label: 'Lightroom Catalog Import' },
]

export function Community() {
  const [activeTab, setActiveTab] = useState<TabType>('newsletter')
  const [email, setEmail] = useState('')
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [feedback, setFeedback] = useState('')
  const [feedbackType, setFeedbackType] = useState<'bug' | 'suggestion' | 'praise'>('suggestion')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState<TabType | null>(null)

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const result = await subscribeEmail(email, 'landing-newsletter')

    setIsSubmitting(false)
    if (result.success) {
      setSubmitted('newsletter')
      setEmail('')
    } else {
      alert(result.error || 'Failed to subscribe. Please try again.')
    }
  }

  const handleFeaturesSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (selectedFeatures.length === 0) return
    setIsSubmitting(true)

    const result = await submitFeatureRequest({ features: selectedFeatures })

    setIsSubmitting(false)
    if (result.success) {
      setSubmitted('features')
      setSelectedFeatures([])
    } else {
      alert(result.error || 'Failed to submit. Please try again.')
    }
  }

  const handleFeedbackSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!feedback.trim()) return
    setIsSubmitting(true)

    const result = await submitFeedback({
      type: feedbackType,
      message: feedback.trim(),
    })

    setIsSubmitting(false)
    if (result.success) {
      setSubmitted('feedback')
      setFeedback('')
    } else {
      alert(result.error || 'Failed to submit. Please try again.')
    }
  }

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const tabs = [
    { id: 'newsletter' as const, label: 'Newsletter', icon: Mail },
    { id: 'features' as const, label: 'Feature Requests', icon: Lightbulb },
    { id: 'feedback' as const, label: 'Feedback', icon: MessageSquare },
  ]

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="community">
      <BlobBackground shapeIndex={3} className="w-[600px] h-[600px] bottom-0 left-0 -translate-x-1/3 translate-y-1/3 bg-gold/5" />

      <div className="max-w-3xl mx-auto relative z-10">
        <SectionHeader
          title="JOIN THE COMMUNITY"
          subtitle="Help shape the future of rawctl"
        />

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id)
                setSubmitted(null)
              }}
              className={`
                flex items-center gap-2 px-6 py-3 font-display text-sm tracking-wider transition-all
                ${activeTab === tab.id
                  ? 'bg-gold text-background'
                  : 'border border-gold/30 text-gold/70 hover:border-gold hover:text-gold'
                }
              `}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Card className="p-8">
            {/* Newsletter */}
            {activeTab === 'newsletter' && (
              submitted === 'newsletter' ? (
                <SuccessMessage
                  title="You're subscribed!"
                  message="Thank you for joining. You'll receive updates about new features and releases."
                />
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <Mail className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h3 className="text-xl font-display text-foreground tracking-art-deco mb-2">
                      STAY UPDATED
                    </h3>
                    <p className="text-foreground/70">
                      Get notified about new releases, features, and tips. No spam, unsubscribe anytime.
                    </p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      required
                      className="flex-1 px-4 py-3 bg-background border border-gold/30 text-foreground placeholder:text-muted focus:border-gold focus:outline-none transition-colors"
                    />
                    <Button
                      variant="solid"
                      className="whitespace-nowrap"
                      onClick={() => {}}
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Subscribe
                        </>
                      )}
                    </Button>
                  </div>

                  <p className="text-xs text-muted text-center">
                    We respect your privacy. Your email will never be shared.
                  </p>
                </form>
              )
            )}

            {/* Feature Requests */}
            {activeTab === 'features' && (
              submitted === 'features' ? (
                <SuccessMessage
                  title="Thank you for voting!"
                  message="Your feature requests have been recorded. We'll prioritize based on community feedback."
                />
              ) : (
                <form onSubmit={handleFeaturesSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <Lightbulb className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h3 className="text-xl font-display text-foreground tracking-art-deco mb-2">
                      WHAT DO YOU WANT NEXT?
                    </h3>
                    <p className="text-foreground/70">
                      Select the features you'd like to see in rawctl. Your votes help us prioritize.
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {featureOptions.map((feature) => (
                      <button
                        key={feature.id}
                        type="button"
                        onClick={() => toggleFeature(feature.id)}
                        className={`
                          flex items-center gap-3 p-3 text-left transition-all
                          ${selectedFeatures.includes(feature.id)
                            ? 'bg-gold/20 border-gold text-foreground'
                            : 'bg-background border-gold/20 text-foreground/70 hover:border-gold/50'
                          }
                          border
                        `}
                      >
                        <div className={`
                          w-5 h-5 border flex items-center justify-center
                          ${selectedFeatures.includes(feature.id) ? 'border-gold bg-gold' : 'border-gold/50'}
                        `}>
                          {selectedFeatures.includes(feature.id) && (
                            <Check className="w-3 h-3 text-background" />
                          )}
                        </div>
                        <span className="text-sm">{feature.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted mb-4">
                      {selectedFeatures.length} feature{selectedFeatures.length !== 1 ? 's' : ''} selected
                    </p>
                    <Button
                      variant="solid"
                      onClick={() => {}}
                      className={selectedFeatures.length === 0 ? 'opacity-50 cursor-not-allowed' : ''}
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Votes
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )
            )}

            {/* Feedback */}
            {activeTab === 'feedback' && (
              submitted === 'feedback' ? (
                <SuccessMessage
                  title="Feedback received!"
                  message="Thank you for taking the time to share your thoughts. We read every message."
                />
              ) : (
                <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                  <div className="text-center mb-8">
                    <MessageSquare className="w-12 h-12 text-gold mx-auto mb-4" />
                    <h3 className="text-xl font-display text-foreground tracking-art-deco mb-2">
                      SHARE YOUR THOUGHTS
                    </h3>
                    <p className="text-foreground/70">
                      Found a bug? Have a suggestion? We'd love to hear from you.
                    </p>
                  </div>

                  {/* Feedback type */}
                  <div className="flex justify-center gap-3">
                    {[
                      { id: 'bug' as const, label: 'Bug Report', emoji: '🐛' },
                      { id: 'suggestion' as const, label: 'Suggestion', emoji: '💡' },
                      { id: 'praise' as const, label: 'Praise', emoji: '❤️' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFeedbackType(type.id)}
                        className={`
                          px-4 py-2 text-sm transition-all
                          ${feedbackType === type.id
                            ? 'bg-gold text-background'
                            : 'border border-gold/30 text-gold/70 hover:border-gold'
                          }
                        `}
                      >
                        <span className="mr-2">{type.emoji}</span>
                        {type.label}
                      </button>
                    ))}
                  </div>

                  <textarea
                    value={feedback}
                    onChange={(e) => setFeedback(e.target.value)}
                    placeholder="Tell us what's on your mind..."
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-background border border-gold/30 text-foreground placeholder:text-muted focus:border-gold focus:outline-none transition-colors resize-none"
                  />

                  <div className="text-center">
                    <Button
                      variant="solid"
                      onClick={() => {}}
                      className={!feedback.trim() ? 'opacity-50 cursor-not-allowed' : ''}
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-5 h-5 animate-spin" />
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Feedback
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              )
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  )
}

function SuccessMessage({ title, message }: { title: string; message: string }) {
  return (
    <motion.div
      className="text-center py-8"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      <div className="w-16 h-16 border-2 border-gold diamond flex items-center justify-center mx-auto mb-6">
        <Check className="diamond-content w-8 h-8 text-gold" />
      </div>
      <h3 className="text-xl font-display text-foreground tracking-art-deco mb-2">
        {title}
      </h3>
      <p className="text-foreground/70">{message}</p>
    </motion.div>
  )
}
