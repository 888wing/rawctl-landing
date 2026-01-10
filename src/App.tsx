import {
  Hero,
  PainPoints,
  Features,
  Comparison,
  OpenSource,
  Pricing,
  Community,
  ReleaseNotes,
  FinalCTA,
  Footer,
} from '@/sections'
import { AutoUpdateModal } from '@/components'

export default function App() {
  return (
    <div className="min-h-screen bg-background bg-crosshatch">
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <Comparison />
        <OpenSource />
        <Pricing />
        <ReleaseNotes />
        <Community />
        <FinalCTA />
      </main>
      <Footer />
      <AutoUpdateModal />
    </div>
  )
}
