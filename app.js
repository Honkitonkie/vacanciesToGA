const puppeteer = require ('puppeteer');
const app = require ('./app_');

puppeteer
  .launch ({headless: true})
  .then (async browser => {
    let hoeveelVacatures = await app.vacatureNummer
    const url = 'https://keser.nl/hoeveelvacatures?hoeveelVacatures='+Number(hoeveelVacatures);
    //opening a new page and navigating to Reddit
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