export type IconSize = 'xs' | 'sm' | 'lg' | 'xl';

export type IconColor = 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'light' | 'white';

export type IconName = (typeof IconNameArray)[number];

export const IconNameArray = [
  'arrow-down',
  'arrow-down-circle',
  'arrow-down-triangle',
  'arrow-left',
  'arrow-left-circle',
  'arrow-left-triangle',
  'arrow-right',
  'arrow-right-circle',
  'arrow-right-triangle',
  'arrow-up',
  'arrow-up-circle',
  'arrow-up-triangle',
  'ban',
  'bluesky',
  'bookmark',
  'box',
  'burger',
  'calendar',
  'camera',
  'car',
  'card',
  'cart',
  'chart-line',
  'check',
  'check-circle',
  'chevron-left',
  'chevron-right',
  'clip',
  'clock',
  'close',
  'close-big',
  'close-circle',
  'code-circle',
  'comment',
  'copy',
  'delete',
  'download',
  'error',
  'exchange-circle',
  'expand',
  'external-link',
  'flag',
  'folder',
  'fullscreen',
  'funnel',
  'hearing',
  'help',
  'help-circle',
  'horn',
  'inbox',
  'info-circle',
  'key',
  'link',
  'list',
  'locked',
  'logout',
  'mail',
  'mail-open',
  'map-marker',
  'map-marker-circle',
  'map-marker-minus',
  'map-marker-plus',
  'maximize',
  'maximize-alt',
  'minimize',
  'minus',
  'minus-circle',
  'more-actions',
  'more-items',
  'note',
  'pa',
  'password-invisible',
  'password-visible',
  'pencil',
  'piattaforme',
  'pin',
  'plug',
  'plus',
  'plus-circle',
  'presentation',
  'print',
  'refresh',
  'restore',
  'rss',
  'rss-square',
  'search',
  'settings',
  'share',
  'sign',
  'software',
  'star-full',
  'star-outline',
  'telephone',
  'tool',
  'unlocked',
  'upload',
  'user',
  'video',
  'warning',
  'warning-circle',
  'wifi',
  'zoom-in',
  'zoom-out',

  // Files
  'file',
  'files',
  'file-audio',
  'file-compressed',
  'file-csv',
  'file-docx',
  'file-json',
  'file-image',
  'file-odp',
  'file-ods',
  'file-odt',
  'file-pdf',
  'file-pdf-ext',
  'file-sheet',
  'file-slides',
  'file-ppt',
  'file-signed',
  'file-txt',
  'file-video',
  'file-xlsx',
  'file-xml',

  // Platforms
  'behance',
  'android-square',
  'android',
  'apple-square',
  'apple',
  'facebook',
  'facebook-square',
  'figma',
  'figma-square',
  'flickr',
  'flickr-square',
  'github',
  'instagram',
  'linkedin',
  'linkedin-square',
  'mastodon',
  'mastodon-square',
  'medium',
  'medium-square',
  'moodle',
  'moodle-square',
  'pinterest',
  'pinterest-square',
  'quora',
  'quora-square',
  'reddit',
  'reddit-square',
  'slack',
  'slack-square',
  'snapchat',
  'snapchat-square',
  'stackexchange',
  'stackexchange-square',
  'stackoverflow',
  'stackoverflow-square',
  'telegram',
  'threads',
  'threads-square',
  'tiktok',
  'tiktok-square',
  'twitter',
  'twitter-square',
  'vimeo',
  'vimeo-square',
  'whatsapp',
  'whatsapp-square',
  'youtube',
  'google',
  'spotify',

  // Extra
  'designers-italia',
  'team-digitale',
] as const;
