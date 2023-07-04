const puppeteer = require('puppeteer');

(async () => {
  // Launch a new browser instance
  const browser = await puppeteer.launch({
    // production settings
    executablePath: '/usr/bin/google-chrome',
    headless: 'new'
  });
   

  // Create a new page
  const page = await browser.newPage();

  // Set the page timeout to 15 seconds
  const timeout = 15000;
  page.setDefaultTimeout(timeout);

  // Set the device dimensions
  await page.setViewport(
    {   width: 1024, 
         height: 768
});

  // Navigate to the URL
  await page.goto('https://www.microsoft.com');

  await page.waitForTimeout(1000);

  _title = await page.title();

  // Perform further automation tasks on the page if needed
  await page.screenshot({path: './downloads/full.png', fullPage: true});

  // Close the browser
  await browser.close();
  console.log(_title);

})();

