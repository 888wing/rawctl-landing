import { motion } from 'framer-motion'
import { Star, GitFork, Users, Code } from 'lucide-react'
import { SectionHeader, Button, DiamondIcon, BlobBackground } from '@/components'

const stats = [
  { icon: Star, value: '128', label: 'Stars' },
  { icon: GitFork, value: '42', label: 'Forks' },
  { icon: Users, value: '15', label: 'Contributors' },
]

const steps = [
  { num: '1', title: 'Fork', description: 'Clone the repository' },
  { num: '2', title: 'Code', description: 'Fix bugs or add features' },
  { num: '3', title: 'PR', description: 'Submit & get merged' },
]

export function OpenSource() {
  return (
    <section className="py-24 px-6 bg-muted/30 relative overflow-hidden">
      <BlobBackground shapeIndex={3} className="w-[500px] h-[500px] top-0 left-0 -translate-x-1/3 -translate-y-1/3" color="bg-secondary/5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          title="Built in the Open"
          subtitle="By Photographers, For Photographers"
        />

        {/* GitHub Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-8 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <DiamondIcon size="lg" className="mx-auto mb-4">
                <stat.icon className="w-6 h-6" />
              </DiamondIcon>
              <div className="text-3xl font-display font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          className="max-w-3xl mx-auto mb-16 bg-card rounded-2xl shadow-soft p-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <blockquote className="text-xl text-foreground/80 italic text-center leading-relaxed">
            "No corporate agenda. No investor pressure. Just a tool
            built by people who actually edit photos."
          </blockquote>
          <p className="text-right text-primary mt-4 font-display font-medium">
            — The rawctl Philosophy
          </p>
        </motion.div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          <Button variant="primary" href="https://github.com/888wing/rawctl" target="_blank">
            <Star className="w-5 h-5" />
            Star on GitHub
          </Button>
          <Button variant="outline" href="https://github.com/888wing/rawctl" target="_blank">
            <Code className="w-5 h-5" />
            Read the Source
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-border mb-16" />

        {/* How to Contribute */}
        <h3 className="text-2xl font-display font-semibold text-foreground text-center mb-12">
          How to Contribute
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.num}
              className="flex items-center gap-4 md:gap-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="text-center">
                <div className="w-20 h-20 rounded-2xl bg-primary/10 flex flex-col items-center justify-center mb-2">
                  <span className="font-display font-bold text-primary text-lg">{step.num}.</span>
                  <span className="font-display font-medium text-foreground text-sm mt-1">
                    {step.title}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm max-w-[100px]">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <span className="text-secondary text-2xl hidden md:block">→</span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
