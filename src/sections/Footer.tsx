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
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'License (MIT)', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-gold/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-gold text-xl">◆</span>
              <span className="font-display text-xl text-foreground tracking-art-deco">rawctl</span>
            </div>
            <p className="text-foreground/60 leading-relaxed">
              Your photos. Your machine. Your freedom.
            </p>
            <p className="text-muted text-sm mt-4">
              A native macOS RAW editor built for photographers who value ownership.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-display text-foreground tracking-wider mb-4">PRODUCT</h4>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Community */}
          <div>
            <h4 className="font-display text-foreground tracking-wider mb-4">COMMUNITY</h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-display text-foreground tracking-wider mb-4">LEGAL</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-muted hover:text-gold transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gold/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted text-sm">
              <span className="text-gold/50">◇</span> Built with SwiftUI + Metal <span className="text-gold/50">◇</span>
            </p>
            <p className="text-muted text-sm">
              © MMXXVI rawctl. Open Source.
            </p>
          </div>

          {/* Final divider */}
          <Divider className="mt-8" />
        </div>
      </div>
    </footer>
  )
}
