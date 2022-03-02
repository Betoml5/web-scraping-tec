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

  await page.screenshot({ path: "screenAfter.png" });

  const rawData = await page.evaluate(() => {
    // const frame = page.frames().find((frame) => frame.name() === "principal");
    // const table = frame.$("table");
    const frame = document.querySelector(
      "frameset frame[name='principal']"
    ).innerHTML;
    console.log(frame);
    // const tbody = await table.$eval("tbody", (element) => element);

    // let data = [];

    // for (var i = 1; i < table.rows.length; i++) {
    //   let objCells = table.rows.item(i).cells;

    //   let values = [];
    //   for (var j = 0; j < objCells.length; j++) {
    //     let text = objCells.item(j).innerHTML;
    //     values.push(text);
    //   }
    //   let d = { i, values };
    //   data.push(d);
    // }

    return frame;
  });

  console.log(rawData);
  //   return frame;
  //   // .contentWindow.document.querySelector("html")
  //   // .querySelector("body")
  //   // .querySelector("table")
  //   // .querySelector("tbody");
  // });
  // console.log(iframe);
  await browser.close();
})();
