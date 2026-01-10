import { motion } from 'framer-motion'
import { Check, Download, Leaf } from 'lucide-react'
import { SectionHeader, Button } from '@/components'
import { APP_CONFIG } from '@/config'

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    features: [
      'Full RAW editing',
      'All pro tools',
      'Unlimited photos',
      'JSON sidecar export',
      'Offline support',
      '5 AI images/mo',
    ],
    cta: 'Download',
    ctaVariant: 'primary' as const,
    recommended: false,
  },
  {
    name: 'Pro',
    price: '$9.99',
    period: '/mo',
    features: [
      'Everything in Free',
      '200 standard AI images/mo',
      '50 HD AI images/mo',
      'Priority queue',
      'Early feature access',
      'Support the project',
    ],
    cta: 'Subscribe',
    ctaVariant: 'secondary' as const,
    recommended: true,
  },
]

const payAsYouGo = [
  { resolution: '1K Resolution', price: '$0.15 / image' },
  { resolution: '2K Resolution', price: '$0.30 / image' },
  { resolution: '4K Resolution', price: '$0.50 / image' },
]

export function Pricing() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="Simple Pricing"
          subtitle="Free forever. Pay only for AI magic."
        />

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`
                relative bg-card rounded-3xl p-8 transition-all duration-500
                ${plan.recommended
                  ? 'border-2 border-primary scale-105 shadow-soft-lg'
                  : 'border border-border/50 shadow-soft hover:shadow-soft-lg'
                }
              `}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-5 py-1.5 rounded-full font-body text-sm font-semibold">
                  Recommended
                </div>
              )}

              {/* Decorative leaf for Pro */}
              {plan.recommended && (
                <div className="absolute top-4 right-4 text-primary/20">
                  <Leaf className="w-8 h-8" />
                </div>
              )}

              {/* Plan name */}
              <h3 className="text-2xl font-display font-bold text-foreground text-center mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-5xl font-display font-bold text-primary">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.ctaVariant}
                className="w-full"
                href={plan.name === 'Free' ? APP_CONFIG.downloadUrl : '#download'}
              >
                {plan.name === 'Free' && <Download className="w-5 h-5" />}
                {plan.cta}
              </Button>
            </motion.div>
          ))}
        </div>

        {/* Pay as you go */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Divider with text */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-border" />
            <span className="font-display text-muted-foreground font-medium">Or Pay As You Go</span>
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-border" />
          </div>

          {/* Pay as you go card */}
          <div className="max-w-2xl mx-auto bg-card rounded-2xl border border-border/50 p-8 shadow-soft">
            <p className="text-muted-foreground text-center mb-6">
              Need just a few AI generations? No problem.
            </p>

            <div className="space-y-3 mb-6">
              {payAsYouGo.map((tier) => (
                <div key={tier.resolution} className="flex items-center gap-4">
                  <div className="w-2 h-2 rounded-full bg-secondary" />
                  <span className="text-muted-foreground flex-1">{tier.resolution}</span>
                  <span className="font-display font-semibold text-primary">{tier.price}</span>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-center text-sm">
              No subscription. No commitment. Pay only what you use.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
