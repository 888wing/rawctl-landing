import { motion } from 'framer-motion'
import { Github, Download, Leaf } from 'lucide-react'
import { Button } from '@/components'
import { APP_CONFIG } from '@/config'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-background relative overflow-hidden">
      {/* Organic background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] rounded-blob bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-blob-2 bg-secondary/5 blur-3xl" />
        <div className="absolute top-1/3 left-1/4 w-[300px] h-[300px] rounded-blob-3 bg-accent/30 blur-2xl" />
      </div>

      {/* Logo */}
      <motion.div
        className="mb-6 relative z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-20 h-20 rounded-blob bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-soft-lg">
          <Leaf className="w-10 h-10 text-primary-foreground" />
        </div>
      </motion.div>

      {/* Brand name with version */}
      <motion.h1
        className="text-3xl text-primary font-display font-semibold tracking-wide mb-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        rawctl
      </motion.h1>
      <motion.span
        className="text-sm text-muted-foreground font-body mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        v{APP_CONFIG.version}
      </motion.span>

      {/* Organic divider */}
      <motion.div
        className="flex items-center gap-4 mb-10"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent to-secondary/50 rounded-full" />
        <div className="w-2 h-2 rounded-full bg-secondary" />
        <div className="w-16 h-[2px] bg-gradient-to-l from-transparent to-secondary/50 rounded-full" />
      </motion.div>

      {/* Main headline */}
      <motion.h2
        className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground text-center leading-tight mb-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        Your Photos. Your Machine.
        <br />
        <span className="text-primary">Your Freedom.</span>
      </motion.h2>

      {/* Subheadline */}
      <motion.p
        className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl mb-10 font-body leading-relaxed"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        A native macOS RAW editor that keeps everything local.
        <br />
        No subscriptions. No cloud. No compromise.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-col sm:flex-row gap-4 mb-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <Button variant="primary" size="lg" href={APP_CONFIG.downloadUrl}>
          <Download className="w-5 h-5" />
          Download for Mac
        </Button>
        <Button variant="outline" size="lg" href={APP_CONFIG.githubUrl} target="_blank">
          <Github className="w-5 h-5" />
          View on GitHub
        </Button>
      </motion.div>

      {/* App screenshot */}
      <motion.div
        className="relative max-w-5xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        {/* Organic frame */}
        <div className="relative rounded-2xl overflow-hidden shadow-lift bg-card p-2">
          <div className="rounded-xl overflow-hidden">
            <img
              src="/screenshot.png"
              alt="rawctl - Native macOS RAW Editor Interface"
              className="w-full transition-all duration-700"
            />
          </div>
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none bg-gradient-to-t from-background/10 to-transparent" />
        </div>

        {/* Floating accent shapes */}
        <div className="absolute -top-4 -right-4 w-24 h-24 rounded-blob bg-secondary/20 blur-xl -z-10" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-blob-2 bg-primary/10 blur-xl -z-10" />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.6 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1.5 h-2.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  )
}
