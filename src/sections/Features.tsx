import { motion } from 'framer-motion'
import { Sun, Spline, Thermometer, Star, Zap, FolderOpen } from 'lucide-react'
import { SectionHeader, Card, BlobBackground } from '@/components'

const features = [
  {
    icon: Sun,
    title: 'Exposure',
    description: '±5 EV range with highlights, shadows, whites & blacks control.',
  },
  {
    icon: Spline,
    title: 'Tone Curves',
    description: '5-point precision curve editor for cinematic color grading.',
  },
  {
    icon: Thermometer,
    title: 'White Balance',
    description: 'Presets + Kelvin temperature (2000-12000K) + tint fine-tuning.',
  },
  {
    icon: Star,
    title: 'Organization',
    description: 'Stars, flags, color labels, custom tags & smart filters.',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Metal GPU acceleration, smart caching, two-stage loading.',
  },
  {
    icon: FolderOpen,
    title: 'RAW Support',
    description: 'ARW, CR2, CR3, NEF, ORF, RAF, RW2, DNG, 3FR, IIQ & more.',
  },
]

export function Features() {
  return (
    <section className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      <BlobBackground shapeIndex={1} className="w-[500px] h-[500px] top-0 right-0 translate-x-1/3 -translate-y-1/3" color="bg-primary/5" />
      <BlobBackground shapeIndex={2} className="w-[400px] h-[400px] bottom-0 left-0 -translate-x-1/3 translate-y-1/3" color="bg-secondary/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Professional Tools"
          subtitle="Everything You Need, Nothing You Don't"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full" variant="default">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
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
