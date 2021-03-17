const puppeteer = require('puppeteer');
const scrape = require('./scrapeKeser');
let hoeveelVacatures
let hoeveelKandidaten

const puppetLauncher = function puppetLauncher() {
  return new Promise(resolve => {
    try {

      let pp = []
      puppetLauncher1

      setTimeout(function () {
        let VacKan = [hoeveelVacatures, hoeveelKandidaten]
        resolve(VacKan)
      }, 25000);
    }
    catch (err) {
      console.error("hij roept puppeteer niet", err);
    }

  }, reject => {
    console.log("the callback to start() was rejected");
  });
}

const puppetLauncher1 = puppeteer
  .launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] })
  .then(async browser => {
    hoeveelVacatures = await scrape.vacatureNummer;
    hoeveelKandidaten = await scrape.kandidatenNummer;
    const url = 'https://keser.nl/hoeveelvacatures?hoeveelVacatures=' + Number(hoeveelVacatures) + '&hoeveelKandidaten=' + Number(hoeveelKandidaten) + '&utm_source=DailyEvent&utm_medium=DailyEvent';
    const page = await browser.newPage();
    await page.goto(url);
    await page.waitForSelector('body');
    setTimeout(() => { browser.close(); }, 25000);
  })
  //handling any errors
  .catch(function (err) {
    console.error(err);
  });

exports.puppetLauncher = puppetLauncher;
