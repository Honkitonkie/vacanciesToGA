// var CronJob = require('cron').CronJob;

//   const doSomething = new CronJob(
//     '26 23 * * 0-6', //cron time
//     goDoIt, //replace with your function that you want to call
//     null, //oncomplete
//     false, //start flag
//     'Europe/Amsterdam',// timezone
//     );
    
  function goDoIt() {
      const puppetLauncher = require ('./puppetLauncher');
      console.log('Events transpire every day...');
      puppetLauncher.puppetLauncher
    }
    goDoIt()
  // doSomething.start()  