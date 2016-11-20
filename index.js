"use strict";

var config = require('./config');
const sonosRouter = require('./sonosrouter');

let routeSonosCommand = (carr, res) => 
    config.sayInCmd[carr.cmd] ? sonosRouter['playurl'](res, getSonosTTSUrl(carr.text, config.sayInCmd[carr.cmd]))
  : sonosRouter[carr.cmd] ? sonosRouter[carr.cmd](res, carr.text)
  : sonosRouter['help'](res);

let parseSlashText = (text) => ({
  cmd: text.split(' ')[0],
  text: text.split(' ').splice(1).join(' ')
});

let getSonosTTSUrl = (text, lang) =>
  config.serverUrl+'/say/'+encodeURIComponent(text)+'.mp3?language='+lang;

let isSonosCommand = (command) => (command == config.slashCommand);

module.exports = function (app, arrTextNotNeeded, arrTextNeeded, acceptedTokens) {

  let runSonosCommand = (req, res, next) => {
    if(!isSonosCommand(req.body.command) || !routeSonosCommand(parseSlashText(req.body.text), res)) next();
  }

  arrTextNotNeeded.push(runSonosCommand);
  app.get('/say/:text.:codec', (req, res) => require('talkiteasy').pipe(res, req.params.text, reqToOptions(req)));

  let module = {};

  module.setSlashCommand = (command) => config.slashCommand = command;
  module.getToken = () => config.slashToken;


  return module;
}