import { motion } from 'framer-motion'
import { Github, Download } from 'lucide-react'
import { Button, BlobBackground } from '@/components'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 relative overflow-hidden">
      <BlobBackground shapeIndex={0} className="w-[800px] h-[800px] -top-20 -left-20 bg-primary/5" />
      <BlobBackground shapeIndex={1} className="w-[600px] h-[600px] top-40 -right-20 bg-secondary/5" />

      {/* Brand name */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-2xl font-bold text-foreground tracking-tight">
          rawctl
        </h1>
      </motion.div>

      {/* Main headline */}
      <motion.h2
        className="text-5xl md:text-7xl font-display text-foreground text-center font-medium leading-tight mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        Your photos. Your machine.
        <br />
        <span className="text-primary italic">Your freedom.</span>
      </motion.h2>

      {/* Subheadline */}
      <motion.p
        className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-12 leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        A native macOS RAW editor that keeps everything local.
        <br />
        No subscriptions. No cloud. No compromise.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-24 z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <Button variant="primary" href="#download">
          <Download className="w-5 h-5" />
          Download for Mac
        </Button>
        <Button variant="outline" href="https://github.com/user/rawctl" target="_blank">
          <Github className="w-5 h-5" />
          GitHub
        </Button>
      </motion.div>

      {/* App screenshot */}
      <motion.div
        className="relative max-w-5xl w-full perspective-1000"
        initial={{ opacity: 0, rotateX: 20, y: 100 }}
        animate={{ opacity: 1, rotateX: 0, y: 0 }}
        transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
      >
        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl bg-background border border-border/50 group">
          <img
            src="/screenshot.png"
            alt="rawctl - Native macOS RAW Editor Interface"
            className="w-full transition-all duration-700 group-hover:scale-[1.02]"
          />
          {/* Screenshot overlay grain */}
          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply pointer-events-none" />
        </div>

        {/* Soft glow behind screenshot */}
        <div className="absolute -inset-4 bg-primary/10 blur-3xl -z-10 rounded-[3rem]" />
      </motion.div>
    </section>
  )
}
