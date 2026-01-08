import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionHeader, Button, Card } from '@/components'

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
    <section className="py-32 px-6 bg-muted/20" id="comparison">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          title="The Honest Comparison"
          subtitle="See What You're Really Paying For"
        />

        {/* Comparison Table */}
        <motion.div
          className="mb-16 overflow-hidden rounded-[2rem] shadow-soft bg-[#FEFEFA]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <table className="w-full">
            <thead>
              <tr className="bg-muted/30">
                <th className="py-6 px-4 md:px-6 text-left font-bold text-muted-foreground tracking-wider"></th>
                <th className="py-6 px-4 md:px-6 text-center font-bold text-primary text-xl">rawctl</th>
                <th className="py-6 px-4 md:px-6 text-center font-bold text-muted-foreground">Adobe Lightroom</th>
              </tr>
            </thead>
            <tbody>
              {comparisons.map((row, index) => (
                <tr key={row.feature} className={`border-b border-border/30 last:border-0 ${index % 2 === 0 ? 'bg-transparent' : 'bg-muted/10'}`}>
                  <td className="py-5 px-4 md:px-6 font-bold text-muted-foreground text-sm">
                    {row.feature}
                  </td>
                  <td className="py-5 px-4 md:px-6 text-center">
                    <span className="font-bold text-foreground">{row.rawctl}</span>
                  </td>
                  <td className="py-5 px-4 md:px-6 text-center text-muted-foreground">
                    {row.lightroom}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* CTA */}
        <div className="text-center mb-20">
          <Button variant="primary" href="#download">
            Switch to Freedom →
          </Button>
        </div>

        {/* Savings Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="max-w-md mx-auto">
            <h3 className="font-bold text-foreground text-center text-xl mb-6">
              Calculate Your Savings
            </h3>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground font-medium">Years with Lightroom:</span>
                <select
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="bg-muted/20 border border-border rounded-lg px-4 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((y) => (
                    <option key={y} value={y}>{y} year{y > 1 ? 's' : ''}</option>
                  ))}
                </select>
              </div>

              <div className="border-t border-border pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">You've already paid:</span>
                  <span className="text-destructive font-medium">${savings}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">With rawctl:</span>
                  <span className="text-primary font-bold">$0</span>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <div className="flex justify-between items-center bg-primary/5 p-4 rounded-xl">
                  <span className="font-bold text-foreground">YOUR SAVINGS:</span>
                  <span className="text-3xl font-bold text-primary">${savings}</span>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
