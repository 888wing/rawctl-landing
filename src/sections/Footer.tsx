import { Leaf } from 'lucide-react'
import { Divider } from '@/components'

const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Changelog', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  community: [
    { label: 'GitHub', href: 'https://github.com/user/rawctl' },
    { label: 'Discussions', href: '#' },
    { label: 'Contributing', href: '#' },
    { label: 'Twitter/X', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '/privacy' },
    { label: 'Terms', href: '/terms' },
    { label: 'License (MIT)', href: 'https://github.com/user/rawctl/blob/main/LICENSE' },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                <Leaf className="w-4 h-4 text-primary" />
              </div>
              <span className="font-display text-xl font-bold text-foreground">rawctl</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Your photos. Your machine. Your freedom.
            </p>
            <p className="text-muted-foreground text-sm mt-4">
              A native macOS RAW editor built for photographers who value ownership.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Community</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
              Built with SwiftUI + Metal
              <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            </p>
            <p className="text-muted-foreground text-sm">
              2026 rawctl. Open Source.
            </p>
          </div>

          {/* Final divider */}
          <Divider className="mt-8" />
        </div>
      </div>
    </footer>
  )
}
