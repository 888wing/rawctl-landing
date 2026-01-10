import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from './Button'
import { APP_CONFIG } from '@/config'

const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'Open Source', href: '#opensource' },
    { label: 'Pricing', href: '#pricing' },
]

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className={`fixed left-0 right-0 z-50 mx-auto max-w-5xl px-4 transition-all duration-300 ${isScrolled ? 'top-4' : 'top-8'
                    }`}
            >
                <div
                    className={`relative flex items-center justify-between rounded-full border px-6 py-3 transition-all duration-300 backdrop-blur-md ${isScrolled
                        ? 'bg-background/80 border-primary/20 shadow-organic-lg'
                        : 'bg-transparent border-transparent'
                        }`}
                >
                    {/* Logo */}
                    <a href="#" className="flex items-center gap-2">
                        <img src="/logo.png" alt="rawctl" className="h-8 w-auto" />
                        <span className="font-display text-xl font-bold text-foreground">rawctl</span>
                    </a>

                    {/* Desktop Links */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className="hidden md:block">
                        <Button variant="primary" className="px-6 py-2" href={APP_CONFIG.downloadUrl}>
                            Download for Mac
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden text-foreground p-1"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl pt-32 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-6 items-center">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-2xl font-display font-medium text-foreground hover:text-primary transition-colors"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {link.label}
                                </a>
                            ))}
                            <div className="mt-8">
                                <Button variant="primary" className="w-full text-lg px-12" onClick={() => setIsMobileMenuOpen(false)} href={APP_CONFIG.downloadUrl}>
                                    Download for Mac
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
