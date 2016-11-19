"use strict";

var config = require('./config');
const sonosRouter = require('./sonosrouter');

let routeSonosCommand = (carr, res) => 
    config.sayincmd[carr.cmd] ? sonosRouter['playurl'](res, getSonosTTSUrl(carr.text, config.sayincmd[carr.cmd]))
  : sonosRouter[carr.cmd] ? sonosRouter[carr.cmd](res, carr.text)
  : sonosRouter['help'](res);

let parseSlashText = (text) => ({
  cmd: text.split(' ')[0],
  text: text.split(' ').splice(1).join(' ')
});

let getSonosTTSUrl = (text, lang) =>
  config.serverurl+'/say/'+encodeURIComponent(text)+'.mp3?l='+lang;

let isSonosCommand = (command) => (command == config.slashcommand);

module.exports = function (app, arrTextNotNeeded, arrTextNeeded) {
  let module = {};

  let runSonosCommand = (req, res, next) => {
    if(!isSonosCommand(req.body.command) || !routeSonosCommand(parseSlashText(req.body.text), res)) next();
  }

  let setSlashCommand = (command) => config.slashcommand = command;

  arrTextNotNeeded.push(runSonosCommand);
  require('talkiteasy')(app);

  return module;
}