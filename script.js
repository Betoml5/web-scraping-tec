const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto("https://intertec.tec-carbonifera.edu.mx/index2.html");
  await page.type("input[name='Control']", "221GC057");
  await page.type("input[type='password']", "ESCOLARES");

  await Promise.all([
    page.waitForNavigation(),
    await page.click("input[name='aceptar']"),
  ]);

  // console.log(page.mainFrame().childFrames();

  const frames = page.mainFrame().childFrames();
  page.waitForTimeout(2000);
  const mainFrame = frames[1];
  page.waitForTimeout(2000);
  const frameContent = await mainFrame.content();
  console.log(frameContent);

  await browser.close();
})();
