/**
 * Central Configuration for LG Control – Smart TV Remote
 * 
 * Edit this file to update release details, download links, and versioning across the entire site.
 */

export interface ReleaseLog {
  version: string;
  date: string;
  tag: string;
  summary: string;
  apkSize: string;
  highlights: string[];
  sha256: string;
}

export const APP_CONFIG = {
  // Required core configuration
  APP_NAME: "LG Control – Smart TV Remote",
  APP_VERSION: "v1.4.2",
  RELEASE_DATE: "October 24, 2026",
  APK_SIZE: "14.8 MB",
  APK_FILENAME: "lg-control-v1.4.2.apk",

  /**
   * APK DOWNLOAD URL OPTIONS:
   * 
   * Option A (Self-Hosted on this website):
   * Put your APK file into `/public/downloads/lg-control-v1.4.2.apk` and set:
   * APK_DOWNLOAD_URL: "/downloads/lg-control-v1.4.2.apk",
   * 
   * Option B (GitHub Releases - Recommended for free high bandwidth):
   * Upload to GitHub Releases and set:
   * APK_DOWNLOAD_URL: "https://github.com/your-username/lg-control/releases/download/v1.4.2/lg-control-v1.4.2.apk",
   */
  APK_DOWNLOAD_URL: "/downloads/lg-control-v1.4.2.apk",
  MIN_ANDROID_VERSION: "Android 8.0 (Oreo) or higher (API level 26+)",

  // Extended technical attributes
  SHORT_NAME: "LG Control",
  TAGLINE: "Precision local network remote for LG webOS televisions",
  SUB_TAGLINE: "Zero cloud lag, zero ads, zero tracking. Instant Wi-Fi control crafted for Android.",
  PACKAGE_NAME: "com.lgcontrol.remote",
  TARGET_ANDROID: "Android 15 (API 35)",
  ARCHITECTURE: "Universal (arm64-v8a, armeabi-v7a, x86_64)",
  SHA256_CHECKSUM: "9d8e7a6b5c4f3e2d1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f",
  SIGNATURE_SCHEME: "APK Signature Scheme v2 + v3",
  PRIVACY_POLICY_LAST_UPDATED: "October 2026",
  
  // GitHub & Distribution URLs
  GITHUB_REPO_URL: "https://github.com/lg-control/lg-control-android",
  GITHUB_RELEASES_URL: "https://github.com/lg-control/lg-control-android/releases",
  GITHUB_ISSUES_URL: "https://github.com/lg-control/lg-control-android/issues",
  CONTACT_EMAIL: "support@lgcontrol.app",
  
  // Protocol details
  SUPPORTED_WEBOS: "webOS 3.0 through webOS 24+ (2016 to 2026)",
  CONNECTION_TYPE: "Local WebSocket (Secure TLS / Port 3000/3001) over LAN",
  DEFAULT_DISCOVERY: "SSDP / mDNS Auto-Discovery with Manual IP fallback"
} as const;

export const RELEASES_HISTORY: ReleaseLog[] = [
  {
    version: "v1.4.2",
    date: "October 24, 2026",
    tag: "Latest Stable",
    summary: "Refined webOS 24 handshake, improved directional responsiveness, and YouTube voice typing dispatch.",
    apkSize: "14.8 MB",
    sha256: "9d8e7a6b5c4f3e2d1a0b9c8d7e6f5a4b3c2d1e0f9a8b7c6d5e4f3a2b1c0d9e8f",
    highlights: [
      "Optimized WebSocket handshake timing for webOS 23 & 24 firmware updates",
      "Added direct YouTube search input dispatch from phone keyboard or speech-to-text",
      "Directional D-pad latency tuned to sub-18ms over standard 5GHz Wi-Fi networks",
      "Graceful background reconnection when switching between Android apps"
    ]
  },
  {
    version: "v1.3.9",
    date: "September 18, 2026",
    tag: "Previous",
    summary: "Magic Remote pointer mode and Wake-on-LAN broadcast improvements.",
    apkSize: "14.5 MB",
    sha256: "4b7c1e8a9d0f2a3c5e7b9d1f3a5c7e9b1d3f5a7c9e1b3d5f7a9c1e3b5d7f9a1c",
    highlights: [
      "New virtual trackpad mode providing mouse-like pointer control on compatible LG screens",
      "Fixed Wake-on-LAN broadcast packets for routers with client isolation enabled",
      "One-tap HDMI input quick switcher (HDMI 1, 2 eARC, 3, 4, TV Live)",
      "Dark AMOLED power-optimized interface with tactile haptic clicks"
    ]
  },
  {
    version: "v1.2.5",
    date: "July 12, 2026",
    tag: "Stable",
    summary: "App tray caching, multi-TV quick switching, and mute toggle shortcut.",
    apkSize: "14.1 MB",
    sha256: "8e2a1b9c7d5f3a1e0b8d6f4a2c0e8b6d4f2a0c8e6b4d2f0a8c6e4b2d0f8a6c4e",
    highlights: [
      "Installed app tray auto-synchronization (Netflix, YouTube, Prime, Disney+, Plex)",
      "Multi-room TV selector: manage Living Room, Bedroom, and Den displays independently",
      "Quick volume rocker support using physical phone volume buttons"
    ]
  }
];

export const COMPATIBLE_TV_SERIES = [
  {
    category: "LG OLED Series",
    years: "2016 – 2026",
    models: "LG C-Series (C9, CX, C1, C2, C3, C4, C5), G-Series (Gallery/Evo G1–G5), B-Series, A-Series, Z-Series 8K, M-Series Wireless OLED",
    supportLevel: "Full Support (Power, Pointer, Apps & Audio)"
  },
  {
    category: "LG QNED Mini-LED",
    years: "2020 – 2026",
    models: "QNED99, QNED95, QNED90, QNED85, QNED80 4K and 8K Mini-LED displays",
    supportLevel: "Full Support (Power, Pointer, Apps & Audio)"
  },
  {
    category: "LG NanoCell Series",
    years: "2018 – 2026",
    models: "NANO99, NANO90, NANO85, NANO80, NANO75 Series",
    supportLevel: "Full Support"
  },
  {
    category: "LG UHD 4K & Commercial Smart TVs",
    years: "2016 – 2026",
    models: "UT80, UR90, UQ80, UP80, UN73, UM73, webOS Commercial Signage displays",
    supportLevel: "Full Support (Standard Remote & App Launcher)"
  }
];

export const ANDROID_REQUIREMENTS = [
  { label: "Operating System", value: "Android 8.0 (API 26) through Android 15" },
  { label: "Hardware Platforms", value: "Phones, foldable devices, and Android tablets" },
  { label: "Permissions Needed", value: "Local Network (ACCESS_WIFI_STATE, INTERNET), Haptics (VIBRATE)" },
  { label: "Root Required", value: "No root or special ADB privileges needed" },
  { label: "Play Services", value: "100% de-Googled capable (Works on GrapheneOS, LineageOS, CalyxOS)" },
  { label: "Network Requirement", value: "Phone and TV must be on the same local Wi-Fi subnet" }
];
