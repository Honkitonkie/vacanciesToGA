
var schedule = require('node-schedule');
var j = schedule.scheduleJob('17 * * *', function(){
  const puppetLauncher = require ('./puppetLauncher');
  console.log('Events transpire every day...');
  puppetLauncher.puppetLauncher
});

