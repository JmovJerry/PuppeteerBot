const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch();

  // Create a new page
  const page = await browser.newPage();

  // Navigate to the URL
  await page.goto('https://www.midjourny.com');

  // Perform further automation tasks on the page if needed

  // Close the browser
  await browser.close();
})();
