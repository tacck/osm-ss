const express = require('express')
const app = express()

app.get('/', function (req, res) {
  const puppeteer = require('puppeteer');
  (async() => {

    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto('https://osm.t88.jp/map/17/43.068/141.35', {waitUntil: 'networkidle2'});
    await page.screenshot({path: 'ss.png'});

    browser.close();
    res.sendFile('ss.png');
  })();
})

app.listen(5000, function () {
})

