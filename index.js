const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://osm.t88.jp/map/17/43.068/141.35');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();

