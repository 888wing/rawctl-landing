import { motion } from 'framer-motion'
import { Download, Leaf } from 'lucide-react'
import { Button } from '@/components'
import { APP_CONFIG } from '@/config'

export function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-muted/30 to-background relative overflow-hidden" id="download">
      {/* Decorative blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-blob blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-blob-2 blur-3xl" />

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          className="bg-card rounded-3xl shadow-soft-lg border border-border/50 p-12 md:p-16 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          {/* Top decoration */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-primary/40 rounded-full" />
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-primary" />
            </div>
            <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-primary/40 rounded-full" />
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Own Your Photos?
          </h2>

          {/* Subheadline */}
          <p className="text-lg text-muted-foreground mb-10">
            Join photographers who chose freedom over fees.
          </p>

          {/* CTA */}
          <Button variant="primary" size="lg" href={APP_CONFIG.downloadUrl}>
            <Download className="w-6 h-6" />
            Download for Mac
          </Button>

          {/* Requirement note */}
          <p className="text-muted-foreground text-sm mt-6">
            Requires {APP_CONFIG.minOS}
          </p>

          {/* Bottom decoration */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent to-secondary/30 rounded-full" />
            <div className="w-2 h-2 rounded-full bg-secondary/40" />
            <div className="w-8 h-[2px] bg-gradient-to-l from-transparent to-secondary/30 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
