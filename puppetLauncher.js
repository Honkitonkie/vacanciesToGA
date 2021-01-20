const puppeteer = require ('puppeteer');
const scrape = require ('./scrapeKeser');

const puppetLauncher = puppeteer
  .launch ({headless: true},{ args: ['--no-sandbox'] })
  .then (async browser => {
    let hoeveelVacatures = await scrape.vacatureNummer;
    let hoeveelKandidaten = await scrape.kandidatenNummer;
    const url = 'https://keser.nl/hoeveelvacatures?hoeveelVacatures='+Number(hoeveelVacatures)+'&hoeveelKandidaten='+Number(hoeveelKandidaten)+'&utm_source=DailyEvent&utm_medium=DailyEvent';
    const page = await browser.newPage ();
    await page.goto (url);
    await page.waitForSelector ('body');
    await page.setRequestInterception(true);
    setTimeout(() => { browser.close(); }, 25000);
  })
  //handling any errors
  .catch (function (err) {
    console.error (err);
  });

    exports.puppetLauncher = puppetLauncher;
