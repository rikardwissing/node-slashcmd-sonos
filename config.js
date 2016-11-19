var config = {
  serverUrl: process.env.SERVERURL || 'http://localhost:5000',
  sonosHost: process.env.SONOS_HOST || '10.0.1.12',
  sonosPort: process.env.SONOS_PORT || 1400,
  sayInCmd: {
    say: 'en-in', säg: 'sv-se',
    sayspa: 'es-es', sayrus: 'ru-ru', saypor: 'pt-pt', saypol: 'pl-pl',
    saynor: 'nb-no', saykor: 'ko-kr', sayita: 'it-it', sayger: 'de-de',
    sayfra: 'fr-fr', sayhol: 'nl-nl', saydan: 'da-dk', saychi: 'zh-cn',
    sayfin: 'fi-fi', saycat: 'ca-es'
  },
  slashToken: process.env.SLASH_TOKEN_SONOS || "slashtokensonos",
  slashCommand: '/sonos'
};

module.exports = config;