const puppeteer = require('puppeteer');
const [, , url, outPath] = process.argv;

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto(url, {timeout: 30000, waitUntil: 'networkidle0'});
  await page.waitForNavigation({
    waitUntil: 'networkidle0',
  });
  await page.pdf({path: outPath, format: 'A4', printBackground: true});

  await browser.close();
})();
