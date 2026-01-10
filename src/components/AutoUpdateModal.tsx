import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, RefreshCw, Sparkles } from 'lucide-react'
import { Button } from './Button'
import { APP_CONFIG, STORAGE_KEYS } from '@/config'
import { useEffect, useState } from 'react'

export function AutoUpdateModal() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // Check if user has seen the modal before
    const hasSeen = localStorage.getItem(STORAGE_KEYS.hasSeenAutoUpdateModal)
    if (!hasSeen && APP_CONFIG.showAutoUpdateNotice) {
      // Small delay to show modal after page loads
      const timer = setTimeout(() => setIsOpen(true), 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    localStorage.setItem(STORAGE_KEYS.hasSeenAutoUpdateModal, 'true')
    setIsOpen(false)
  }

  const handleDownload = () => {
    localStorage.setItem(STORAGE_KEYS.hasSeenAutoUpdateModal, 'true')
    window.open(APP_CONFIG.downloadUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          >
            <div className="relative max-w-md w-full bg-card border-2 border-gold p-1">
              <div className="bg-background p-8 relative">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-muted hover:text-foreground transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 border-2 border-gold diamond flex items-center justify-center">
                      <RefreshCw className="diamond-content w-8 h-8 text-gold" />
                    </div>
                    <motion.div
                      className="absolute -top-1 -right-1"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-5 h-5 text-gold" />
                    </motion.div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display text-foreground text-center tracking-art-deco mb-4">
                  AUTO-UPDATE NOW AVAILABLE
                </h3>

                {/* Content */}
                <p className="text-foreground/70 text-center mb-6">
                  Starting from <span className="text-gold font-semibold">v{APP_CONFIG.version}</span>, rawctl includes{' '}
                  <span className="text-gold">automatic updates</span> via Sparkle.
                </p>

                <div className="bg-gold/10 border border-gold/30 p-4 mb-6">
                  <p className="text-sm text-foreground/80 text-center">
                    <span className="text-gold font-semibold">Important:</span> To enable auto-updates,
                    please re-download the latest version. Future updates will be seamless!
                  </p>
                </div>

                {/* Benefits */}
                <ul className="space-y-2 mb-6">
                  {[
                    'Automatic background updates',
                    'Never miss new features',
                    'Security patches delivered instantly',
                  ].map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="text-gold">◆</span>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <Button variant="solid" onClick={handleDownload} className="w-full">
                    <Download className="w-5 h-5" />
                    Download v{APP_CONFIG.version}
                  </Button>
                  <button
                    onClick={handleClose}
                    className="text-muted hover:text-foreground text-sm transition-colors"
                  >
                    Maybe later
                  </button>
                </div>

                {/* Corner decorations */}
                <div className="absolute top-2 left-2 text-gold/30">◇</div>
                <div className="absolute top-2 right-2 text-gold/30">◇</div>
                <div className="absolute bottom-2 left-2 text-gold/30">◇</div>
                <div className="absolute bottom-2 right-2 text-gold/30">◇</div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
