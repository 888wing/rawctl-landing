// App configuration - single source of truth for version and download URLs

export const APP_CONFIG = {
  version: '1.1.0',
  releaseDate: '2026-01-08',
  minOS: 'macOS 14+',

  // Download URLs - update these when releasing new versions
  downloadUrl: 'https://github.com/888wing/rawctl/releases/download/v1.1.0/rawctl-1.1.0.dmg',
  githubUrl: 'https://github.com/888wing/rawctl',
  releasesUrl: 'https://github.com/888wing/rawctl/releases',

  // API endpoints
  apiUrl: 'https://api.rawctl.app',

  // Feature flags
  showAutoUpdateNotice: true,  // Show modal about re-downloading for auto-update
}

// Local storage keys
export const STORAGE_KEYS = {
  hasSeenAutoUpdateModal: 'rawctl_seen_autoupdate_modal',
  emailSubscribed: 'rawctl_email_subscribed',
}
