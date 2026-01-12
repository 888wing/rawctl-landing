// App configuration - single source of truth for version and download URLs

export const APP_CONFIG = {
  version: '1.3.0',
  releaseDate: '2026-01-12',
  minOS: 'macOS 14+',

  // Download URLs - using rawctl-latest.dmg so URL stays constant
  downloadUrl: 'https://releases.rawctl.com/rawctl-latest.dmg',
  githubUrl: 'https://github.com/888wing/rawctl',
  releasesUrl: 'https://github.com/888wing/rawctl/releases',

  // API endpoints
  apiUrl: 'https://feedback.rawctl.com',

  // Feature flags
  showAutoUpdateNotice: true,  // Show modal about re-downloading for auto-update
}

// Local storage keys
export const STORAGE_KEYS = {
  hasSeenAutoUpdateModal: 'rawctl_seen_autoupdate_modal',
  emailSubscribed: 'rawctl_email_subscribed',
}
