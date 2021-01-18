
var schedule = require('node-schedule');
const puppetLauncher = require ('./puppetLauncher');

var j = schedule.scheduleJob('17 * * *', function(){
  console.log('The answer to life, the universe, and everything!');
});