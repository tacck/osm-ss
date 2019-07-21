const express = require('express')
const app = express()

app.get('/', function (req, res) {
  const puppeteer = require('puppeteer');
  (async() => {

    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://osm.t88.jp/map/17/43.068/141.35', {waitUntil: 'networkidle2'});
    // Type our query into the search bar
    // await page.type('test');

    // await page.click('input[type="submit"]');

    // Wait for the results to show up
    // await page.waitForSelector('h3 a');

    // Extract the results from the page
    //const links = await page.evaluate(() => {
    //  const anchors = Array.from(document.querySelectorAll('h3 a'));
    //  return anchors.map(anchor => anchor.textContent);
    //});
    await page.screenshot({path: 'example.png'});

    browser.close();
    res.send('{}');
  })();
})

app.listen(5000, function () {
})

