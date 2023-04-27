const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto('https://facebook.com/login');
  await page.type('#email', 'adonisavance+facebook@gmail.com');
  await page.type('#pass', '9Xm,sAVb)-Bf82c');
  await page.click('button');
  await page.screenshot({ path: 'facebook.png' });

  // await page.close();
})();
