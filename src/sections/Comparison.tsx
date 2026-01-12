import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { SectionHeader, Button, BlobBackground } from '@/components'

const comparisons = [
  { feature: 'Price', rawctl: 'Free Forever', lightroom: '$9.99/month ($120/yr)', winner: 'rawctl' },
  { feature: 'Data Storage', rawctl: '100% Local', lightroom: 'Cloud-dependent', winner: 'rawctl' },
  { feature: 'Edit Format', rawctl: 'JSON Sidecar (Open)', lightroom: 'Proprietary Catalog', winner: 'rawctl' },
  { feature: 'Source Code', rawctl: 'Open Source', lightroom: 'Closed Source', winner: 'rawctl' },
  { feature: 'Offline Mode', rawctl: 'Full Support', lightroom: 'Limited Features', winner: 'rawctl' },
  { feature: 'AI Features', rawctl: 'Pay-as-you-go', lightroom: 'Subscription Required', winner: 'rawctl' },
]

export function Comparison() {
  const [years, setYears] = useState(3)
  const savings = years * 120

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <BlobBackground shapeIndex={0} className="w-[600px] h-[600px] top-1/2 left-0 -translate-x-1/2 -translate-y-1/2" color="bg-accent/30" />

      <div className="max-w-5xl mx-auto relative z-10">
        <SectionHeader
          title="The Honest Comparison"
          subtitle="See What You're Really Paying For"
        />

        {/* Comparison Table */}
        <motion.div
          className="bg-card rounded-2xl shadow-soft overflow-hidden mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="py-4 px-6 text-left text-muted-foreground font-body font-medium"></th>
                <th className="py-4 px-6 text-center font-display font-semibold text-primary">rawctl</th>
                <th className="py-4 px-6 text-center font-display font-medium text-muted-foreground">Adobe Lightroom</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr key={row.feature} className={index < comparisons.length - 1 ? 'border-b border-border/50' : ''}>
                  <td className="py-4 px-6 text-foreground font-medium">
                    {row.feature}
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="text-primary font-medium flex items-center justify-center gap-2">
                      {row.rawctl}
                      {row.winner === 'rawctl' && <Check className="w-4 h-4 text-primary" />}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-center text-muted-foreground">
                    {row.lightroom}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* CTA */}
        <div className="text-center mb-16">
          <Button variant="primary" href="#download">
            Switch to Freedom
          </Button>
        </div>

        {/* Savings Calculator */}
        <motion.div
          className="max-w-md mx-auto bg-card rounded-2xl shadow-soft p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-display font-semibold text-foreground text-xl text-center mb-6">
            Calculate Your Savings
          </h3>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-muted-foreground">Years with Lightroom:</span>
              <select
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                className="bg-muted border border-border text-foreground px-4 py-2 rounded-lg font-body focus:outline-none focus:ring-2 focus:ring-primary/20"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((y) => (
                  <option key={y} value={y}>{y} year{y > 1 ? 's' : ''}</option>
                ))}
              </select>
            </div>

            <div className="border-t border-border pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="text-muted-foreground">You've already paid:</span>
                <span className="text-foreground">${savings}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">With rawctl:</span>
                <span className="text-primary font-semibold">$0</span>
              </div>
            </div>

            <div className="border-t border-primary/20 pt-4">
              <div className="flex justify-between items-center">
                <span className="font-display font-semibold text-foreground">Your Savings:</span>
                <span className="text-2xl font-display font-bold text-primary">${savings}</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
