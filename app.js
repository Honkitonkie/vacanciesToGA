var CronJob = require('cron').CronJob;
let minute;

if (minute==undefined){
  minute = 33;
}

  const doSomething = new CronJob(
    '0-59 * * * *', //cron time
    goDoIt, //replace with your function that you want to call
    null, //oncomplete
    false, //start flag
    'Europe/Amsterdam',// timezone
    );
    
  function goDoIt() {
      // const puppetLauncher = require ('./puppetLauncher');
      console.log('Events transpire every day...');
      // puppetLauncher.puppetLauncher
      minute = minute + 2;
    }

  doSomething.start()  