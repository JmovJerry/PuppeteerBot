import { launch } from 'puppeteer';
import { scrollToBottom } from './module/scrollToBottom.js';

(async () => {
  // Launch a new browser instance
  const browser = await launch({
    // production settings
    // executablePath: '/usr/bin/google-chrome',
    executablePath: 'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    // headless: false
  });
   

  // Create a new page
  const page = await browser.newPage();

  // Set the page timeout to 15 seconds
  const timeout = 30000;
  page.setDefaultTimeout(timeout);

  // Set the device dimensions
  await page.setViewport({
    width: 1024, 
    height: 768
  });

  // Navigate to the URL
  await page.goto('https://www.microsoft.com');

  await scrollToBottom(page);

  // await page.waitForTimeout(1000);
  // await page.waitForXPath('//*[text()[contains(.,"Back to top")]]');
  //*//a[contains(text(), "Back to top")

  const _title = await page.title();

  // Perform further automation tasks on the page if needed
  await page.screenshot({path: './downloads/full.png', fullPage: true});

  // Close the browser
  await browser.close();
  console.log(_title);

})();


