import { motion } from 'framer-motion'
import { Check, Download } from 'lucide-react'
import { SectionHeader, Button } from '@/components'

const plans = [
  {
    numeral: 'I',
    name: 'FREE',
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
    cta: 'DOWNLOAD',
    ctaVariant: 'primary' as const,
    recommended: false,
  },
  {
    numeral: '◆◆◆◆',
    name: 'PRO',
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
    cta: 'SUBSCRIBE',
    ctaVariant: 'solid' as const,
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
          title="SIMPLE PRICING"
          subtitle="Free Forever. Pay Only for AI Magic."
        />

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`
                relative bg-card border p-8
                ${plan.recommended
                  ? 'border-gold border-2 scale-105 shadow-gold-glow'
                  : 'border-gold/30'
                }
              `}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              {/* Recommended badge */}
              {plan.recommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-background px-4 py-1 font-display text-sm tracking-wider">
                  RECOMMENDED
                </div>
              )}

              {/* Corner decorations */}
              <div className="absolute top-3 left-3 text-gold/50">◇</div>
              <div className="absolute top-3 right-3 text-gold/50">◇</div>
              <div className="absolute bottom-3 left-3 text-gold/50">◇</div>
              <div className="absolute bottom-3 right-3 text-gold/50">◇</div>

              {/* Plan indicator */}
              <div className="text-center mb-4">
                <span className="font-display text-gold tracking-widest">{plan.numeral}</span>
              </div>

              {/* Plan name */}
              <h3 className="text-2xl font-display text-foreground tracking-art-deco text-center mb-4">
                {plan.name}
              </h3>

              {/* Price */}
              <div className="text-center mb-6">
                <span className="text-5xl font-display text-gold">{plan.price}</span>
                <span className="text-muted ml-2">{plan.period}</span>
              </div>

              {/* Divider */}
              <div className="border-t border-gold/20 mb-6" />

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-gold flex-shrink-0" />
                    <span className="text-foreground/70">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button variant={plan.ctaVariant} className="w-full" href="#download">
                {plan.name === 'FREE' && <Download className="w-5 h-5" />}
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
            <div className="flex-1 border-t border-gold/30" />
            <span className="font-display text-muted tracking-wider">OR PAY AS YOU GO</span>
            <div className="flex-1 border-t border-gold/30" />
          </div>

          {/* Pay as you go card */}
          <div className="max-w-2xl mx-auto bg-card border border-gold/20 p-8">
            <p className="text-foreground/70 text-center mb-6">
              Need just a few AI generations? No problem.
            </p>

            <div className="space-y-3 mb-6">
              {payAsYouGo.map((tier) => (
                <div key={tier.resolution} className="flex items-center gap-4">
                  <span className="text-gold">◆</span>
                  <span className="text-foreground/70 flex-1">{tier.resolution}</span>
                  <span className="font-display text-gold tracking-wider">{tier.price}</span>
                </div>
              ))}
            </div>

            <p className="text-muted text-center text-sm">
              No subscription. No commitment. Pay only what you use.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
