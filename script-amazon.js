const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });

  const page = await browser.newPage();
  await page.goto("https://www.amazon.com.mx");
  await page.screenshot({ path: "amazon.png" });

  await page.type("#twotabsearchtextbox", "libros de javascript");
  await page.click("#nav-search-submit-button");
  await page.waitForTimeout(3000);
  await page.screenshot({ path: "amazon1.png" });

  const frames = await page.evaluate(() => {
    const elements = document.querySelectorAll("frame");

    const frames = [];

    for (let element of elements) {
      frames.push(element);
    }

    return frames;
  });

  console.log(frames.length);

  await browser.close();
})();
