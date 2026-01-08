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

// Asymmetric border radii for organic feel
const radiuses = [
  'rounded-[2rem_2rem_4rem_2rem]',
  'rounded-[3rem_2rem_2rem_3rem]',
  'rounded-[2rem_4rem_2rem_2rem]',
  'rounded-[2rem_2rem_3rem_4rem]',
  'rounded-[4rem_3rem_2rem_2rem]',
  'rounded-[2rem_3rem_4rem_2rem]',
]

export function Features() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      <BlobBackground shapeIndex={2} className="w-[900px] h-[900px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent/10" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Professional Tools"
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
              <Card className={`h-full ${radiuses[index % radiuses.length]} hover:bg-white/60`}>
                {/* Icon */}
                <motion.div
                  className="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center mb-6 mx-auto text-secondary"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <feature.icon className="w-7 h-7" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground text-center mb-4">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-center leading-relaxed">
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
