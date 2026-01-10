import { motion } from 'framer-motion'
import { HardDrive, CircleDollarSign, Unlock } from 'lucide-react'
import { SectionHeader, Card } from '@/components'

const painPoints = [
  {
    icon: HardDrive,
    title: 'No Cloud Dependency',
    subtitle: 'Process Locally',
    description: 'Your files never leave your machine. Full GPU acceleration with Metal. Zero upload latency. Works offline.',
  },
  {
    icon: CircleDollarSign,
    title: 'No Subscription Ransom',
    subtitle: 'Own Your Tools',
    description: 'Why rent software at $120/year? Core editing is free forever. Only pay for AI features when you need them.',
  },
  {
    icon: Unlock,
    title: 'No Lock-In',
    subtitle: 'Open Standards',
    description: 'Standard JSON sidecars store your edits. No proprietary catalogs. Export everything, anytime, anywhere.',
  },
]

export function PainPoints() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Why Local-First?"
          subtitle="Your Photos Deserve Better"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <Card className="h-full text-center" variant="elevated">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <point.icon className="w-8 h-8 text-primary" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                  {point.title}
                </h3>

                {/* Subtitle */}
                <p className="text-sm text-secondary font-medium mb-4">
                  {point.subtitle}
                </p>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {point.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
