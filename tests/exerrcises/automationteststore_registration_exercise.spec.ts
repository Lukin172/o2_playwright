import { test } from "@playwright/test";
//! používat  pw-test
test("e2E registration", async ({ page }) => {
  await page.goto("https://automationteststore.com/");

  await page.locator("ul[id='customer_menu_top'] li a").click();
  await page.locator("button[title='Continue']").click();

  await page.locator("#AccountFrm_firstname").fill("Lukas");
  await page.locator("#AccountFrm_lastname").fill("Dudek");
  await page.locator("#AccountFrm_email").fill("mamradpivo@gmail.com");

  await page.locator("#AccountFrm_city").fill("Praha");
  await page.locator("#AccountFrm_city").fill("Praha2");
  await page.locator("#AccountFrm_country_id").selectOption("56");
  await page.locator("#AccountFrm_postcode").fill("73914");
  await page.locator("#AccountFrm_zone_id").selectOption("895");

  await page.locator("button[title='Continue']").click();
});
