import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, RefreshCw, Sparkles, Check } from 'lucide-react'
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
            <div className="relative max-w-md w-full bg-card rounded-3xl shadow-soft-lg border border-border/50 overflow-hidden">
              <div className="p-8 relative">
                {/* Close button */}
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-muted/30 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all"
                >
                  <X className="w-4 h-4" />
                </button>

                {/* Icon */}
                <div className="flex justify-center mb-6">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <RefreshCw className="w-8 h-8 text-primary" />
                    </div>
                    <motion.div
                      className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Sparkles className="w-3 h-3 text-secondary" />
                    </motion.div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-display font-bold text-foreground text-center mb-4">
                  Auto-Update Now Available
                </h3>

                {/* Content */}
                <p className="text-muted-foreground text-center mb-6">
                  Starting from <span className="text-primary font-semibold">v{APP_CONFIG.version}</span>, rawctl includes{' '}
                  <span className="text-primary">automatic updates</span> via Sparkle.
                </p>

                <div className="bg-primary/5 border border-primary/20 rounded-xl p-4 mb-6">
                  <p className="text-sm text-muted-foreground text-center">
                    <span className="text-primary font-semibold">Important:</span> To enable auto-updates,
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
                    <li key={benefit} className="flex items-center gap-3 text-sm text-muted-foreground">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      {benefit}
                    </li>
                  ))}
                </ul>

                {/* Actions */}
                <div className="flex flex-col gap-3">
                  <Button variant="primary" onClick={handleDownload} className="w-full">
                    <Download className="w-5 h-5" />
                    Download v{APP_CONFIG.version}
                  </Button>
                  <button
                    onClick={handleClose}
                    className="text-muted-foreground hover:text-foreground text-sm transition-colors py-2"
                  >
                    Maybe later
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
