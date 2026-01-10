import { useState, useEffect } from 'react'
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
  Privacy,
  Terms,
} from '@/sections'
import { AutoUpdateModal } from '@/components'

type Page = 'home' | 'privacy' | 'terms'

function getPageFromPath(): Page {
  const path = window.location.pathname
  if (path === '/privacy') return 'privacy'
  if (path === '/terms') return 'terms'
  return 'home'
}

export default function App() {
  const [page, setPage] = useState<Page>(getPageFromPath)

  useEffect(() => {
    // Handle browser back/forward navigation
    const handlePopState = () => {
      setPage(getPageFromPath())
    }
    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Render Privacy page
  if (page === 'privacy') {
    return (
      <div className="min-h-screen bg-background bg-crosshatch">
        <Privacy />
      </div>
    )
  }

  // Render Terms page
  if (page === 'terms') {
    return (
      <div className="min-h-screen bg-background bg-crosshatch">
        <Terms />
      </div>
    )
  }

  // Render Home page
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
