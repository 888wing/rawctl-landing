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
      <BlobBackground shapeIndex={3} className="w-[600px] h-[600px] bottom-0 left-0 -translate-x-1/3 translate-y-1/3 bg-primary/5" />

      <div className="max-w-3xl mx-auto relative z-10">
        <SectionHeader
          title="Join the Community"
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
                flex items-center gap-2 px-6 py-3 font-body font-semibold text-sm rounded-full transition-all duration-300
                ${activeTab === tab.id
                  ? 'bg-primary text-primary-foreground shadow-soft'
                  : 'bg-muted/30 text-muted-foreground hover:bg-muted/50 hover:text-foreground'
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
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <Mail className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      Stay Updated
                    </h3>
                    <p className="text-muted-foreground">
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
                      className="flex-1 px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                    />
                    <Button
                      variant="primary"
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

                  <p className="text-xs text-muted-foreground text-center">
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
                    <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <Lightbulb className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      What Do You Want Next?
                    </h3>
                    <p className="text-muted-foreground">
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
                          flex items-center gap-3 p-3 text-left transition-all rounded-xl
                          ${selectedFeatures.includes(feature.id)
                            ? 'bg-primary/10 border-primary text-foreground'
                            : 'bg-muted/20 border-transparent text-muted-foreground hover:bg-muted/40'
                          }
                          border-2
                        `}
                      >
                        <div className={`
                          w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors
                          ${selectedFeatures.includes(feature.id) ? 'border-primary bg-primary' : 'border-border'}
                        `}>
                          {selectedFeatures.includes(feature.id) && (
                            <Check className="w-3 h-3 text-primary-foreground" />
                          )}
                        </div>
                        <span className="text-sm">{feature.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      {selectedFeatures.length} feature{selectedFeatures.length !== 1 ? 's' : ''} selected
                    </p>
                    <Button
                      variant="primary"
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
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <MessageSquare className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-foreground mb-2">
                      Share Your Thoughts
                    </h3>
                    <p className="text-muted-foreground">
                      Found a bug? Have a suggestion? We'd love to hear from you.
                    </p>
                  </div>

                  {/* Feedback type */}
                  <div className="flex justify-center gap-3">
                    {[
                      { id: 'bug' as const, label: 'Bug Report', emoji: '' },
                      { id: 'suggestion' as const, label: 'Suggestion', emoji: '' },
                      { id: 'praise' as const, label: 'Praise', emoji: '' },
                    ].map((type) => (
                      <button
                        key={type.id}
                        type="button"
                        onClick={() => setFeedbackType(type.id)}
                        className={`
                          px-4 py-2 text-sm rounded-full transition-all duration-300
                          ${feedbackType === type.id
                            ? 'bg-primary text-primary-foreground shadow-soft'
                            : 'bg-muted/30 text-muted-foreground hover:bg-muted/50'
                          }
                        `}
                      >
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
                    className="w-full px-4 py-3 bg-background border border-border rounded-xl text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  />

                  <div className="text-center">
                    <Button
                      variant="primary"
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
      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
        <Check className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-display font-bold text-foreground mb-2">
        {title}
      </h3>
      <p className="text-muted-foreground">{message}</p>
    </motion.div>
  )
}
