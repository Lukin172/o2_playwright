import { test } from "@playwright/test";
//! používat  pw-test

test("Click test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("o2_skoleni");
  await page.locator("#password").fill("PlaywrightJede1");
  await page.locator("button[type='submit']").click();
});

test("Fill and type test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").type("test");
  await page.locator("#username").fill("secondtest");
  await page.locator("#username").type("o2");
});

test("Select tests", async ({ page }) => {
  await page.goto(
    "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
  );
  await page.locator("#dropdowm-menu-1").selectOption("python");
  await page.locator("#dropdowm-menu-2").selectOption({ label: "TestNG" });
});

//test("Checkbox, radio button test, async ({ page }) => {
//  await page.goto(
//   "https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html"
// );
// await page.locator("input[value='option-1']").check("");
//  await page.locator("input[value='yellow']").check("");
//});

test("iFrame", async ({ page }) => {
  await page.goto("https://www.webdriveruniversity.com/IFrame/index.html");
  const frame = page.frameLocator("#frame");
  await frame.locator("button[id=button-find-out-more]").click();
});

test("Hover test", async ({ page }) => {
  await page.goto("https://webdriveruniversity.com/Actions/index.html");
  await page
    .locator("div[class='dropdown hover'] button[class='dropbtn']")
    .hover();
  await page
    .locator("div[class='dropdown hover'] a[class='list-alert']")
    .click();
});
