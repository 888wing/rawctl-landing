import { motion } from 'framer-motion'
import { Github, Download } from 'lucide-react'
import { Button } from '@/components'

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-sunburst relative overflow-hidden">
      {/* Logo */}
      <motion.div
        className="mb-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="w-16 h-16 border-2 border-gold diamond flex items-center justify-center">
          <span className="diamond-content text-gold font-display text-2xl">r</span>
        </div>
      </motion.div>

      {/* Brand name */}
      <motion.h1
        className="text-2xl text-gold font-display tracking-art-deco-wide mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        rawctl
      </motion.h1>

      {/* Divider */}
      <motion.div
        className="divider-gold mb-12"
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <span className="text-gold text-2xl">✦</span>
      </motion.div>

      {/* Main headline */}
      <motion.h2
        className="text-4xl md:text-5xl lg:text-7xl font-display text-foreground text-center tracking-art-deco-wide leading-tight mb-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        YOUR PHOTOS. YOUR MACHINE.
        <br />
        <span className="text-gold">YOUR FREEDOM.</span>
      </motion.h2>

      {/* Subheadline */}
      <motion.p
        className="text-lg md:text-xl text-foreground/70 text-center max-w-2xl mb-12 font-body"
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
        className="flex flex-col sm:flex-row gap-4 mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <Button variant="solid" href="https://releases.rawctl.com/rawctl-latest.dmg">
          <Download className="w-5 h-5" />
          Download for Mac
        </Button>
        <Button variant="primary" href="https://github.com/user/rawctl" target="_blank">
          <Github className="w-5 h-5" />
          GitHub
        </Button>
      </motion.div>

      {/* App screenshot */}
      <motion.div
        className="relative max-w-5xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        {/* Double frame */}
        <div className="relative p-1 border-2 border-gold">
          <div className="p-1 border-4 border-background">
            <img
              src="/screenshot.png"
              alt="rawctl - Native macOS RAW Editor Interface"
              className="w-full grayscale-[30%] brightness-90 hover:grayscale-0 hover:brightness-100 transition-all duration-700"
            />
          </div>
          {/* Corner decorations */}
          <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-gold" />
          <div className="absolute top-2 right-2 w-6 h-6 border-t-2 border-r-2 border-gold" />
          <div className="absolute bottom-2 left-2 w-6 h-6 border-b-2 border-l-2 border-gold" />
          <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-gold" />
        </div>
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none shadow-gold-glow-xl" />
      </motion.div>
    </section>
  )
}
