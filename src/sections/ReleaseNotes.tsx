import { motion } from 'framer-motion'
import { Wand2, Star, Thermometer, Palette, Folder, Keyboard, Zap, Crop, Shield, Maximize, Camera, FolderOpen, Import, MousePointer, Menu, Bug } from 'lucide-react'
import { SectionHeader, Card, BlobBackground } from '@/components'
import { useState } from 'react'

// Release notes data - kept in sync with Swift ReleaseNotes.swift
const releases = [
  {
    version: '1.2',
    date: 'January 12, 2026',
    title: 'Camera Profiles & Project Workflow',
    highlights: [
      { icon: Camera, text: 'Camera Profiles with 3 built-in looks', color: 'text-violet-500' },
      { icon: FolderOpen, text: 'Project-based workflow with state persistence', color: 'text-blue-500' },
      { icon: Import, text: 'Lightroom catalog import with metadata', color: 'text-orange-500' },
    ],
    sections: [
      {
        title: 'Camera Profiles',
        icon: Camera,
        color: 'text-violet-500',
        items: [
          '4-stage color pipeline: RAW Decode → Camera Profile → User Adjustments → Display',
          'rawctl Neutral: Identity matrix with filmic neutral tone curve',
          'rawctl Vivid: Enhanced saturation/contrast with punchy colors',
          'rawctl Portrait: Skin-optimized matrix with soft tone curve',
          'ProfilePicker UI in Light panel for quick profile switching',
          'Filmic tone curves with natural highlight roll-off',
        ],
      },
      {
        title: 'Project Workflow',
        icon: FolderOpen,
        color: 'text-blue-500',
        items: [
          'Project-based organization instead of just folders',
          'Auto-restore last project on app launch',
          'State persistence: filter state, sort order, view mode, zoom level',
          'Multi-directory support for single project',
          'Security-scoped bookmarks for folder access persistence',
          'Project status tracking: Importing → Culling → Editing → Delivered',
        ],
      },
      {
        title: 'Lightroom Import',
        icon: Import,
        color: 'text-orange-500',
        items: [
          'Import Lightroom Catalog (Cmd+Shift+I)',
          'Ratings, flags, and color labels imported',
          'Real-time import progress with phase indicators',
          'SQLite3 integration for direct catalog reading',
        ],
      },
      {
        title: 'Multi-Select Actions',
        icon: MousePointer,
        color: 'text-green-500',
        items: [
          'Right-click bulk actions for rating, flag, color label',
          'Smart selection detection showing count of affected photos',
          'Select All and Deselect All shortcuts in menu',
        ],
      },
      {
        title: 'Enhanced Menu Bar',
        icon: Menu,
        color: 'text-cyan-500',
        items: [
          'File menu: New Project (Cmd+N), Import Lightroom Catalog',
          'View menu: Toggle Sidebar, Toggle Inspector, Zoom controls',
          'Photo menu: Rating, Flag, Color Label submenus',
          'Select menu: Select Picks, Select Rejects, Invert Selection',
        ],
      },
      {
        title: 'Bug Fixes',
        icon: Bug,
        color: 'text-red-500',
        items: [
          'AI generation progress no longer gets stuck at 90%',
          'Crop button now properly activates crop overlay',
          'Section headers no longer have infinite dropdown animation',
          'Persistence: Per-asset debounce prevents racing saves',
          'Auto-save every 30 seconds prevents data loss',
        ],
      },
    ],
  },
  {
    version: '1.1',
    date: 'January 8, 2026',
    title: 'Crop, Rotate & Resize',
    highlights: [
      { icon: Crop, text: 'Full crop overlay with aspect ratio enforcement', color: 'text-green-500' },
      { icon: Wand2, text: 'Straighten, rotate 90°, and flip controls', color: 'text-purple-500' },
      { icon: Maximize, text: 'Non-destructive resize with multiple modes', color: 'text-blue-500' },
    ],
    sections: [
      {
        title: 'Crop & Composition',
        icon: Crop,
        color: 'text-green-500',
        items: [
          'Crop overlay with draggable corner handles and rule-of-thirds grid',
          'Aspect ratio presets: Free, Original, 1:1, 4:3, 3:2, 16:9, 5:4, 7:5',
          'Aspect ratio enforcement when dragging crop handles',
          'Real-time dimension labels showing crop size in pixels',
          'Straighten slider (-45° to +45°) for fine rotation adjustment',
          '90° rotation buttons (rotate left/right)',
          'Flip horizontal/vertical toggle buttons',
        ],
      },
      {
        title: 'Resize',
        icon: Maximize,
        color: 'text-blue-500',
        items: [
          'ResizePanel in Inspector with multiple modes',
          'Modes: Pixels, Percentage, Long Edge, Short Edge, Presets',
          'Presets: Instagram, Facebook Cover, Twitter Header, 4K/2K Wallpaper',
          'Maintain aspect ratio toggle',
          'Calculated output dimensions preview',
          'Recipe-based resize stored non-destructively',
        ],
      },
      {
        title: 'Transform Mode',
        icon: Wand2,
        color: 'text-purple-500',
        items: [
          'Transform toolbar with Crop button alongside AI Edit',
          'Keyboard shortcut C to toggle transform mode',
          'Enter to commit and exit, Escape to cancel',
        ],
      },
      {
        title: 'Security Hardening',
        icon: Shield,
        color: 'text-red-500',
        items: [
          'Device ID tracking via Keychain',
          'Rate limit handling with Retry-After support',
          'Security block detection for HTTP 403',
          'Token replay detection with automatic sign-out',
        ],
      },
    ],
  },
  {
    version: '1.0',
    date: 'January 8, 2026',
    title: 'First Stable Release',
    highlights: [
      { icon: Thermometer, text: 'Professional white balance controls', color: 'text-orange-500' },
      { icon: Folder, text: 'Photo organization with ratings, flags, and labels', color: 'text-cyan-500' },
      { icon: Star, text: 'True RAW processing via CIRAWFilter', color: 'text-yellow-500' },
    ],
    sections: [
      {
        title: 'White Balance',
        icon: Thermometer,
        color: 'text-orange-500',
        items: [
          'Preset modes: As Shot, Auto, Daylight, Cloudy, Shade, Tungsten, Fluorescent, Flash',
          'Kelvin temperature slider (2000-12000K)',
          'Tint adjustment (-150 to +150)',
          'Eyedropper tool for picking neutral point',
        ],
      },
      {
        title: 'Effects',
        icon: Palette,
        color: 'text-pink-500',
        items: [
          'Vignette with amount and midpoint controls',
          'Sharpness (luminance sharpening)',
          'Noise reduction',
          'Split toning (highlight/shadow color grading)',
        ],
      },
      {
        title: 'Organization',
        icon: Folder,
        color: 'text-cyan-500',
        items: [
          'Rating: 0-5 stars with visual indicators',
          'Flags: Pick (green) / Reject (red) / Unflag',
          'Color labels: 7 colors with thumbnail indicators',
          'Tags: Custom text tags with add/remove',
          'FilterBar: Filter photos by rating, flag, color, or tag',
        ],
      },
      {
        title: 'Keyboard Shortcuts',
        icon: Keyboard,
        color: 'text-gray-500',
        items: [
          '1-5: Set rating (same key toggles off)',
          '0: Clear rating',
          'P: Pick flag, X: Reject flag, U: Unflag',
          '6-9: Color labels (Red, Yellow, Green, Blue)',
        ],
      },
      {
        title: 'Core Features',
        icon: Star,
        color: 'text-yellow-500',
        items: [
          'Folder browsing with file list',
          'Thumbnail grid view and single photo view',
          'True RAW processing via CIRAWFilter',
          'Non-destructive editing stored in sidecar JSON',
          '5-point Tone Curve editor',
          'JPG export with sRGB profile',
          'Memory card detection',
        ],
      },
      {
        title: 'Performance',
        icon: Zap,
        color: 'text-yellow-500',
        items: [
          'Two-stage loading: Instant embedded JPEG preview, then full RAW decode',
          'Eliminated flicker when adjusting sliders',
          'Debounced preview updates (50ms)',
          'RAW filter caching',
        ],
      },
    ],
  },
]

export function ReleaseNotes() {
  const [expandedVersion, setExpandedVersion] = useState<string | null>('1.2')

  return (
    <section className="py-32 px-6 relative overflow-hidden" id="releases">
      <BlobBackground shapeIndex={4} className="w-[800px] h-[800px] top-0 right-0 translate-x-1/3 -translate-y-1/3 bg-accent/8" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeader
          title="What's New"
          subtitle="Release Notes & Version History"
        />

        <div className="space-y-6">
          {releases.map((release, releaseIndex) => (
            <motion.div
              key={release.version}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: releaseIndex * 0.1, duration: 0.5 }}
            >
              <Card
                className={`rounded-[1.5rem] cursor-pointer ${
                  expandedVersion === release.version ? 'ring-2 ring-secondary/30' : ''
                }`}
                hover={false}
              >
                {/* Version Header */}
                <div
                  className="flex items-center justify-between"
                  onClick={() => setExpandedVersion(
                    expandedVersion === release.version ? null : release.version
                  )}
                >
                  <div className="flex items-center gap-4">
                    <span className="px-3 py-1 bg-secondary text-white text-sm font-semibold rounded-full">
                      v{release.version}
                    </span>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">
                        {release.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {release.date}
                      </p>
                    </div>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedVersion === release.version ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="text-muted-foreground"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </motion.div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-3 mt-6">
                  {release.highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-2 px-3 py-2 bg-white/50 rounded-lg border border-gray-200/50"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                    >
                      <highlight.icon className={`w-4 h-4 ${highlight.color}`} />
                      <span className="text-sm text-foreground">{highlight.text}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Expanded Content */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedVersion === release.version ? 'auto' : 0,
                    opacity: expandedVersion === release.version ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="mt-8 pt-6 border-t border-gray-200/50 space-y-6">
                    {release.sections.map((section, sectionIndex) => (
                      <motion.div
                        key={section.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * sectionIndex }}
                      >
                        <div className="flex items-center gap-2 mb-3">
                          <section.icon className={`w-4 h-4 ${section.color}`} />
                          <h4 className={`text-sm font-semibold ${section.color}`}>
                            {section.title}
                          </h4>
                        </div>
                        <ul className="space-y-2 pl-6">
                          {section.items.map((item, itemIndex) => (
                            <li
                              key={itemIndex}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-gray-300 mt-2 flex-shrink-0" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Download CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a
            href="https://github.com/888wing/rawctl/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors font-medium"
          >
            View all releases on GitHub
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
