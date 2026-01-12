import { motion } from 'framer-motion'
import { Sun, Spline, Thermometer, Star, Zap, FolderOpen } from 'lucide-react'
import { SectionHeader, Card } from '@/components'

const features = [
  {
    icon: Sun,
    title: 'EXPOSURE',
    description: '±5 EV range with highlights, shadows, whites & blacks control.',
  },
  {
    icon: Spline,
    title: 'TONE CURVES',
    description: '5-point precision curve editor for cinematic color grading.',
  },
  {
    icon: Thermometer,
    title: 'WHITE BALANCE',
    description: 'Presets + Kelvin temperature (2000-12000K) + tint fine-tuning.',
  },
  {
    icon: Star,
    title: 'ORGANIZATION',
    description: 'Stars, flags, color labels, custom tags & smart filters.',
  },
  {
    icon: Zap,
    title: 'PERFORMANCE',
    description: 'Metal GPU acceleration, smart caching, two-stage loading.',
  },
  {
    icon: FolderOpen,
    title: 'RAW SUPPORT',
    description: 'ARW, CR2, CR3, NEF, ORF, RAF, RW2, DNG, 3FR, IIQ & more.',
  },
]

export function Features() {
  return (
    <section className="py-32 px-6 bg-sunburst">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="PROFESSIONAL TOOLS"
          subtitle="Everything You Need, Nothing You Don't"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full">
                {/* Corner diamonds */}
                <div className="absolute top-4 left-4 text-gold/30">◇</div>
                <div className="absolute top-4 right-4 text-gold/30">◇</div>
                <div className="absolute bottom-4 left-4 text-gold/30">◇</div>
                <div className="absolute bottom-4 right-4 text-gold/30">◇</div>

                {/* Icon in diamond */}
                <motion.div
                  className="w-12 h-12 border border-gold/50 flex items-center justify-center mb-6 mx-auto"
                  style={{ transform: 'rotate(45deg)' }}
                  whileHover={{ rotate: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon
                    className="w-6 h-6 text-gold"
                    style={{ transform: 'rotate(-45deg)' }}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-lg font-display text-gold tracking-art-deco text-center mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/70 text-center leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
