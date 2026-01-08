import { motion } from 'framer-motion'
import { Download } from 'lucide-react'
import { Button, BlobBackground } from '@/components'

export function FinalCTA() {
  return (
    <section className="py-32 px-6 relative overflow-hidden" id="download">
      <BlobBackground shapeIndex={3} className="w-[1000px] h-[1000px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-secondary/5" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-[#FEFEFA] rounded-[3rem] p-12 md:p-24 border border-border shadow-soft relative overflow-hidden">
            {/* Inner blob */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <h2 className="text-4xl md:text-6xl font-display font-medium text-foreground mb-8 leading-tight">
              Ready to own your photos?
            </h2>

            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
              Join photographers who chose freedom over fees. First-class native performance, free forever.
            </p>

            <div className="flex flex-col items-center gap-6">
              <Button variant="primary" href="#" className="h-16 px-12 text-lg rounded-full">
                <Download className="w-6 h-6" />
                Download for Mac
              </Button>

              <p className="text-muted-foreground text-sm font-medium">
                Requires macOS 14+ • Apple Silicon Optimized
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
