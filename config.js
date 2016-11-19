var config = {
  serverurl: process.env.SERVERURL || 'http://localhost:5000',
  sonoshost: process.env.SONOS_HOST || '10.0.1.12',
  sonosport: process.env.SONOS_PORT || 1400,
  verifytoken: process.env.VERIFY_TOKEN || "testtoken",
  sayincmd: {
    say: 'en-in', säg: 'sv-se',
    sayspa: 'es-es', sayrus: 'ru-ru', saypor: 'pt-pt', saypol: 'pl-pl',
    saynor: 'nb-no', saykor: 'ko-kr', sayita: 'it-it', sayger: 'de-de',
    sayfra: 'fr-fr', sayhol: 'nl-nl', saydan: 'da-dk', saychi: 'zh-cn',
    sayfin: 'fi-fi', saycat: 'ca-es'
  },
  slashcommand: '/sonos'
};

module.exports = config;