import { test } from "@playwright/test";
//! používat  pw-test
test("First test", async ({ page }) => {
  //async asynchronni test, await= počkej než test doběhne,
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("test");
});
