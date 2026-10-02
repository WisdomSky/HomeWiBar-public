// The captures are used exactly as taken — whole, uncropped, at their own size.
import networkShot from '../../screenshots/network-tab-screenshot.png'
import devicesShot from '../../screenshots/connected-devices-screenshot.png'
import bandLockingShot from '../../screenshots/band-locking-panel-screenshot.png'
import messagesShot from '../../screenshots/messages-panel-screenshot.png'
import icon1 from '../assets/icon-1.png'
import icon2 from '../assets/icon-2.png'
import icon3 from '../assets/icon-3.png'
import appIcon from '../../HomeWiBar-vector.svg'
import icon4 from '../assets/icon-4.png'
import icon5 from '../assets/icon-5.png'
import iconUnread from '../assets/icon-unread.png'

/** Release asset URL. Set `VITE_DOWNLOAD_URL` in the repository's Actions variables to publish it. */
export const downloadUrl: string = 'https://raw.githubusercontent.com/WisdomSky/HomeWiBar-public/main/HomeWiBar.zip'

export const developer = {
  url: 'https://paodayag.dev',
  name: 'paodayag.dev'
}

export interface Feature {
  n: string
  eyebrow: string
  title: string
  copy: string
  bullets: string[]
  image: string
  alt: string
  caption: string
  /** Shown under the screenshot when the feature has a real caveat worth stating up front. */
  warning?: string
  /**
   * The capture's own pixel width. Figures are capped at this, so an image is never upscaled past
   * the size it was taken at.
   */
  width: number
}

/**
 * The four screenshots in `pages/screenshots/`, cropped to the panel they show. Every claim below
 * is something the app does in `Sources/H153Signal/`; the numbers are the panel's real dimensions.
 */
export const features: Feature[] = [
  {
    n: '01',
    eyebrow: 'The panel',
    title: 'Every number the router will give up',
    copy:
      'The menu bar shows one figure. The panel shows the rest: the three signal metrics that matter, ' +
      'the serving cell, and five minutes of throughput drawn as it arrives.',
    bullets: [
      'See your signal status in real time',
      'See if you are connected to LTE or 5G and which band',
      'And most of all...',
      'See how much data is your Home WiFI using every second!',
      'So you can yell at someone for downloading very big files and wasting your precious data. :)',
    ],
    image: networkShot,
    alt: 'The HomeWiBar panel on its Network tab: signal metrics, cell details and two throughput charts',
    caption: 'Network tab · the panel is 322 × 496 pt',
    width: 882,
  },
  {
    n: 'Devices',
    eyebrow: '',
    title: 'See who\'s <strong>connected</strong>...',
    copy:
      'View the list of all devices currently connected to the network and find the <strong>sneaky trespassers</strong> who got access to your WiFI and are <strong>sucking your precious data</strong>.',
    bullets: [
      'What kind of device are they using?',
      'Which WiFI are they connected to? is it 5Ghz or 2.4Ghz?',
      '<strong>Block</strong> all <strong>the strangers</strong> from connecting to your WiFi ever again!',
    ],
    image: devicesShot,
    alt: 'The Connected Devices tab listing three devices with their IP addresses, bands and throughput',
    caption: '',
    width: 744,
  },
  {
    n: 'Band Locking',
    eyebrow: '',
    title: '<strong>Lock-in</strong> to get the best connection...',
    copy:
      'A dedicated Band Locking setting that allows you to see all bands available in your area and see which bands you should tell your <strong>Home WiFi</strong> to connect to and lock into to get the <strong>most stable connection</strong>. ',
    bullets: [
      'Lock into a Band easily with a click of a button',
      'If you don\'t know which band to choose, you can let HomeWiBar <strong>analyze</strong> it for you and <strong>recommend</strong> the best band to lock into to experience the <strong>most stable connection</strong>',
    ],
    image: bandLockingShot,
    alt: 'The Band Locking window: bands as rows with cell counts, signal indicators and lock buttons',
    caption: '',
    warning:
      '',
    width: 1303,
  },
  {
    n: 'Messaging',
    eyebrow: '',
    title: 'A new <strong>message</strong> received...',
    copy:
      'Receive notifications directly in your Mac when a new message is sent to your Home WiFi\'s number.',
    bullets: [
      'Get notified in your Mac everytime you received a new message',
      'View and reply to a message straight from your Mac',
      'A dedicated messages window for all your Home WiFi\'s text messages',
    ],
    image: messagesShot,
    alt: 'The Messages window: a conversation list on the left and a thread of message bubbles on the right',
    caption: '',
    width: 1031,
  },
]

export interface IconLevel {
  bars: number
  label: string
  image: string
}

/** The menu bar icon at each level, rendered by the app's own `SignalBarsIcon`. */
export const iconLevels: IconLevel[] = [
  { bars: 1, label: '1', image: icon1 },
  { bars: 2, label: '2', image: icon2 },
  { bars: 3, label: '3', image: icon3 },
  { bars: 4, label: '4', image: icon4 },
  { bars: 5, label: '5', image: icon5 },
]

export const unreadIcon = iconUnread

/** The four-bar icon, used as the page's own mark in the header and footer. */
/* The app's own icon, the same file Resources/make-icon.sh turns into AppIcon.icns. */
export { appIcon }

/** A real reading, taken while this page was being written. */
export const live = {
  rsrp: '−94 dBm',
  rsrq: '−10.5 dB',
  sinr: '−4 dB',
  band: 'B28',
  quality: 'Good',
}

export interface Spec {
  label: string
  value: string
}

export const specs: Spec[] = [
  { label: 'Router', value: 'Huawei H153-381, firmware 4.0.0.5(H3568SP2C238)' },
  { label: 'Requires', value: 'macOS 14 or later · Apple silicon' },
  { label: 'Panel', value: '322 × 496 pt' },
  { label: 'Poll interval', value: '1 second' },
  { label: 'Dependencies', value: 'None — Swift and the system frameworks' },
  { label: 'Credentials', value: 'Your gateway password, in the macOS Keychain' },
  { label: 'Telemetry', value: 'None' },
  { label: 'Signing', value: 'Ad-hoc signed, not notarised — see Install' },
]

/** Things the app will not do, stated before anyone downloads it. */
export const limits: string[] = [
  'Built for one router. It speaks this firmware’s XML API; another Huawei 4G/5G CPE may answer differently or not at all.',
  'Not notarised. macOS will hold the first launch until you allow it — right-click Open, or clear the quarantine flag with xattr as the Install steps show.',
  'The router never reports the Wi-Fi password back, so the Wi-Fi tab can set a new one but cannot show you the current one.',
  'It only polls when your default gateway is the configured router. On any other network it shows nothing rather than guessing.',
  'Band locking is a real change to the modem, and the only band that will then be measured is the one you locked.',
]

export interface InstallStep {
  title: string
  body: string
  /** A command to run, shown in a terminal block with a copy button. */
  command?: string

  foot?: string
  /** Shown under a command when the exact path depends on where the app was put. */
  note?: string
}

export const installSteps: InstallStep[] = [
  {
    title: 'Download <strong>HomeWiBar</strong> and then unzip it',
    body: 'Download the HomeWiBar app using the Download button on the left. 👈👈👈',
  },
  {
    title: 'Drag it into the <strong>/Applications</strong> folder',
    body: 'Drag <strong>HomeWiBar.app</strong> into the <strong>/Applications</strong> folder of your Mac to install it.',
  },
  {
    title: 'Make sure to open it right the first time',
    body: 'The build is ad-hoc signed, so macOS may refuse to open it the first time. What you need to do for the first ' +
        'time is find <strong>HomeWiBar.app</strong> inside your <strong>/Applications</strong> folder then right-click ' +
        'and choose "<strong>Open</strong>", then "Open" again in the dialog<br><br>' +
        '...or if that didn\'t work, <strong>Open</strong> your Mac\'s built-in <strong>Terminal</strong> app and run the command below once:',
    command: 'xattr -dr com.apple.quarantine /Applications/HomeWiBar.app',
    foot: '<br>After that, open <strong>HomeWiBar</strong> again.',
    note: 'Once you opened it the first time using either of the instructions listed above, there\'s no need to follow this instruction again the next time you open the app. You can just double-click or open it from the Launchpad.',
  },
  {
    title: 'Enter your Home WiFi\'s gateway access',
    body: 'The panel opens in a setup state and asks for the gateway <strong>username</strong> and <strong>password</strong> of your Home WiFi so that <strong>HomeWiBar</strong> can connect to it.',
    note: 'Note: The default gateway username and password of your Home WiFi can be found in the sticker printed on your Home WiFi device.',
  },
  {
    title: 'Start <strong>HomeWiBar</strong>',
    body: 'Once you entered the correct gateway username and password details, <strong>press start to HomeWiBar</strong>.',
  }
]
