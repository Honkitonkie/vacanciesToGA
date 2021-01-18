const puppeteer = require ('puppeteer');
const scrape = require ('./scrapeKeser');

const puppetLauncher = puppeteer
  .launch ({headless: false})
  .then (async browser => {
    let hoeveelVacatures = await scrape.vacatureNummer;
    let hoeveelKandidaten = await scrape.kandidatenNummer;
    const url = 'https://keser.nl/hoeveelvacatures?hoeveelVacatures='+Number(hoeveelVacatures)+'&hoeveelKandidaten='+Number(hoeveelKandidaten);
    console.log('https://keser.nl/hoeveelvacatures?hoeveelVacatures='+Number(hoeveelVacatures)+'&hoeveelKandidaten='+Number(hoeveelKandidaten));
    const page = await browser.newPage ();
    await page.goto (url);
    await page.waitForSelector ('body');
    await page.setRequestInterception(true);
page.on('request', req => {
    const requestURL = req.url();
    if (requestURL.indexOf("google-analytics.com/collect") > -1) {
        console.log("Intercepted: " + requestUrl);
        req.abort();
    } else {
        req.continue()
    }
});
    // await browser.close ();
    setTimeout(() => { browser.close(); }, 25000);
  })
  //handling any errors
  .catch (function (err) {
    console.error (err);
  });

    exports.puppetLauncher = puppetLauncher;