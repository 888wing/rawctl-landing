import { motion } from 'framer-motion'

interface SectionHeaderProps {
  title: string
  subtitle?: string
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Organic divider */}
      <div className="flex items-center justify-center gap-3 mb-6">
        <div className="w-12 h-[2px] bg-gradient-to-r from-transparent to-secondary/40 rounded-full" />
        <div className="w-2 h-2 rounded-full bg-secondary" />
        <div className="w-12 h-[2px] bg-gradient-to-l from-transparent to-secondary/40 rounded-full" />
      </div>

      <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
