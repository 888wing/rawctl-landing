import { motion } from 'framer-motion'
import { Star, GitFork, Users, Code } from 'lucide-react'
import { SectionHeader, Button, Card } from '@/components'

const stats = [
  { icon: Star, value: '128', label: 'Stars' },
  { icon: GitFork, value: '42', label: 'Forks' },
  { icon: Users, value: '15', label: 'Contributors' },
]

const steps = [
  { numeral: '01', title: 'Fork', description: 'Clone the repository' },
  { numeral: '02', title: 'Code', description: 'Fix bugs or add features' },
  { numeral: '03', title: 'PR', description: 'Submit & get merged' },
]

export function OpenSource() {
  return (
    <section className="py-32 px-6 bg-[#FDFCF8]">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          title="Built in the Open"
          subtitle="By Photographers, For Photographers"
        />

        {/* GitHub Stats */}
        <motion.div
          className="flex flex-wrap justify-center gap-12 md:gap-24 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center group"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary transition-transform duration-300 group-hover:scale-110">
                <stat.icon className="w-8 h-8" />
              </div>
              <div className="text-4xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.div
          className="max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Card className="text-center !p-12 hover:shadow-soft">
            <blockquote className="text-2xl text-foreground font-display italic leading-relaxed mb-6">
              "No corporate agenda. No investor pressure. Just a tool
              built by people who actually edit photos."
            </blockquote>
            <p className="text-primary font-bold tracking-wide">
              — The rawctl Philosophy
            </p>
          </Card>
        </motion.div>

        {/* CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-24">
          <Button variant="primary" href="https://github.com/888wing/rawctl" target="_blank">
            <Star className="w-5 h-5" />
            Star on GitHub
          </Button>
          <Button variant="outline" href="https://github.com/888wing/rawctl" target="_blank">
            <Code className="w-5 h-5" />
            Read the Source
          </Button>
        </div>

        {/* How to Contribute */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center" aria-hidden="true">
            <div className="w-full border-t border-border/40"></div>
          </div>
          <div className="relative flex justify-center">
            <span className="bg-[#FDFCF8] px-4 text-sm text-muted-foreground uppercase tracking-wider font-bold">How to Contribute</span>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.numeral}
              className="flex items-center gap-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="flex flex-col items-center">
                <span className="text-6xl font-display text-muted/20 font-bold mb-2">{step.numeral}</span>
                <h4 className="text-lg font-bold text-foreground mb-1">{step.title}</h4>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
