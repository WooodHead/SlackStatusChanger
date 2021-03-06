module.exports = {
  initialized: false,
  apiToken: null,
  tokenVerified: false,

  // 今のstatusを保持
  profile: {
    status_emoji: '',
    status_text: '',
    custom: false,
  },

  team: {
    name: null,
    icon: null,
    customEmojis: []
  },

  user: {
    name: null,
    icon: null,
  },

  // 自動実行を実行したときのSSIDを保持
  prevSSID: null,

  // emojiの表示種類
  emojiSet: 'google',

  preset: [
    {
      status_emoji: ':house_with_garden:',
      status_text: 'In the house',
      custom: false,
    },
    {
      status_emoji: ':office:',
      status_text: 'In the office',
      custom: false,
    },
    {
      status_emoji: ':face_with_thermometer:',
      status_text: 'Out sick',
      custom: false,
    },
    {
      status_emoji: ':palm_tree:',
      status_text: 'Vacationing',
      custom: false,
    },
    {
      status_emoji: ':bus:',
      status_text: 'Commuting',
      custom: false,
    },
    {
      status_emoji: ':slack:',
      status_text: 'Status with Custom-Emoji',
      custom: true,
    },
  ],

  // statusの自動切り替え
  auto: {
    enable: false,
    interval: 120,
    settings: [
      {
        enable: false,
        ssid: '',
        status_emoji: ':house_with_garden:',
        status_text: 'In the house',
        custom: false,
      },
      {
        enable: false,
        ssid: '',
        status_emoji: ':office:',
        status_text: 'In the office',
        custom: false,
      }
    ]
  },
  suspend: {
    enable: false,
    settings: [
      {
        enable: false,
        ssid: '',
        status_emoji: ':sleepy:',
        status_text: 'AFK',
        custom: false,
      },
      {
        enable: false,
        ssid: '',
        status_emoji: ':information_source:',
        status_text: 'Maybe moving or AFK',
        custom: false,
      },
    ]
  },

  // 接続したことあるSSID
  knownSSID: [],
}
