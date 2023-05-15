import { test } from "@playwright/test";
//! používat  pw-test

test("Open projects in PMTool:", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("o2_skoleni");
  await page.locator("#password").fill("PlaywrightJede1");
  await page.locator("button[type='submit']").click();
  //  await page.locator("a[class='menu-itemsitems21'] span[class='title level-0']").click();
  await page.locator("css=#Projects").click();
});
