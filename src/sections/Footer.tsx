
const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Changelog', href: '#' },
    { label: 'Roadmap', href: '#' },
  ],
  community: [
    { label: 'GitHub', href: 'https://github.com/888wing/rawctl' },
    { label: 'Discussions', href: '#' },
    { label: 'Contributing', href: '#' },
    { label: 'Twitter/X', href: 'https://x.com/Nelson198456' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'License (MIT)', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-border/40 bg-[#FDFCF8]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <span className="font-bold text-2xl text-foreground tracking-tight">rawctl</span>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Your photos. Your machine. Your freedom.
            </p>
            <p className="text-sm text-muted-foreground/80">
              A native macOS RAW editor built for photographers who value ownership.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-foreground mb-6">Product</h4>
            <ul className="space-y-4">
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
            <h4 className="font-bold text-foreground mb-6">Community</h4>
            <ul className="space-y-4">
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
            <h4 className="font-bold text-foreground mb-6">Legal</h4>
            <ul className="space-y-4">
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
        <div className="border-t border-border/40 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm font-medium">
              Built with SwiftUI + Metal
            </p>
            <p className="text-muted-foreground text-sm">
              © 2026 rawctl. Open Source.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
