import { motion } from 'framer-motion'
import { Check, Download } from 'lucide-react'
import { SectionHeader, Button, Card, BlobBackground } from '@/components'

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
    ctaVariant: 'outline' as const,
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
    ctaVariant: 'primary' as const,
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
    <section className="py-32 px-6 relative overflow-hidden" id="pricing">
      <BlobBackground shapeIndex={0} className="w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary/5" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader
          title="Simple Pricing"
          subtitle="Free Forever. Pay Only for AI Magic."
        />

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card
                className={`
                  h-full flex flex-col items-center text-center !p-10
                  ${plan.recommended ? 'ring-2 ring-primary border-primary/20 scale-105 z-10 shadow-float' : 'hover:scale-105 active:scale-100'}
                `}
                hover={false}
              >
                {/* Recommended badge */}
                {plan.recommended && (
                  <div className="absolute -top-4 bg-primary text-primary-foreground px-6 py-1.5 rounded-full font-bold text-sm tracking-wide shadow-soft">
                    RECOMMENDED
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-8">
                  <span className="text-5xl font-display font-medium text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2 font-medium">{plan.period}</span>
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-border/50 mb-8" />

                {/* Features */}
                <ul className="space-y-4 mb-10 flex-grow text-left w-full">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                      </div>
                      <span className="text-muted-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant={plan.ctaVariant} className="w-full" href="#download">
                  {plan.name === 'Free' && <Download className="w-4 h-4" />}
                  {plan.cta}
                </Button>
              </Card>
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
          <div className="flex items-center gap-4 mb-12">
            <div className="flex-1 border-t border-border/40" />
            <span className="font-bold text-muted-foreground uppercase tracking-wider text-sm">Or Pay As You Go</span>
            <div className="flex-1 border-t border-border/40" />
          </div>

          {/* Pay as you go card */}
          <div className="max-w-2xl mx-auto bg-white/50 border border-border/40 rounded-[2rem] p-8 md:p-12 text-center backdrop-blur-sm">
            <p className="text-foreground text-lg mb-8 font-medium">
              Need just a few AI generations? No problem.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mb-8">
              {payAsYouGo.map((tier) => (
                <div key={tier.resolution} className="bg-background rounded-2xl p-4 border border-border/50 shadow-sm">
                  <div className="font-bold text-foreground mb-1">{tier.resolution}</div>
                  <div className="text-primary font-bold">{tier.price}</div>
                </div>
              ))}
            </div>

            <p className="text-muted-foreground text-sm">
              No subscription. No commitment. Pay only what you use.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
