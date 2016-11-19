"use strict";

const config = require('./config');
const sonos = new (require('sonos').Sonos)(config.sonoshost, config.sonosport);

let sonosRouter = {};

sonosRouter.playurl = (res, url) => {
  console.log("Playing Url");

  sonos.play(url, (err, playing) => console.log([err, playing]));

  res.send("Skickar "+url+" till sonos");
  return 1;
};

sonosRouter.play = (res, search) => {
  console.log("Adding to Spotify");

  var spotify_track_id = '4Yx9Tw9dTgQ8eGCq3PRDyn';

  sonos.addSpotify(spotify_track_id, function (err, res) {
    console.log([err, res]);
  })

  res.send("Söker efter "+search+"...");
  return 1;
}

sonosRouter.setvolume = (res, volume) => {
  console.log("Setting Volume Sonos");

  sonos.setVolume(volume, function (err, playing) {
      console.log([err, playing])
  });

  res.send("Volymen satt till "+volume);
  return 1;
}

sonosRouter.stop = (res) => {
  console.log("Stopping Sonos");

  sonos.stop(function (err, stopped) {
    console.log([err, stopped])
  });

  res.send("Sonos stoppad");
  return 1;
}

sonosRouter.current = (res) => {
  console.log("Showing currentTrack");

  sonos.currentTrack(function (err, track) {
    if (err) throw err
    console.log(track || 'Nothing Playing')
  });

  res.send("Hämtar nuvarande låt...");
  return 1;
}

sonosRouter.help = (res) => {
  console.log("Showing Help");

  res.send("use /sonos say, play, setvolume");
  return 1;
}

module.exports = sonosRouter;