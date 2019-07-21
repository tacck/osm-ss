const express = require('express')
const app = express()

app.get('/:zoom/:lat/:lon', function (req, res) {
  const puppeteer = require('puppeteer');
  (async() => {

    const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.goto(`https://osm.t88.jp/map/${req.params.zoom}/${req.params.lat}/${req.params.lon}`, {waitUntil: 'networkidle2'});
    console.log(__dirname);
    await page.screenshot({path: 'ss.png'});

    browser.close();
    res.sendFile('ss.png', {
      root: __dirname
    });
  })();
})

app.listen(5000, function () {
})

