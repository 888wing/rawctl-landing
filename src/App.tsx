import {
  Hero,
  PainPoints,
  Features,
  Comparison,
  OpenSource,
  Pricing,
  FinalCTA,
  Footer,
} from '@/sections'
import { Navbar } from '@/components'

export default function App() {
  return (
    <div className="min-h-screen bg-background bg-crosshatch">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Comparison />
        <OpenSource />
        <Pricing />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
