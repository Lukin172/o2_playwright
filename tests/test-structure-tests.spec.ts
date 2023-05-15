import { expect, test } from "@playwright/test";

test.describe("SPMTool login tests", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("https://tredgate.com/pmtool/");
  });
  test("Sucessful login", async ({ page }) => {
    await page.locator("#username").fill("o2_skoleni");
    await page.locator("#password").fill("PlaywrightJede1");
    await page.locator("button[type='submit']").click();
    await expect(page.locator("#welcome-page-header")).toBeVisible();
  });

  test("Failed login", async ({ page }) => {
    await page.locator("#username").fill("pivo");
    await page.locator("#password").fill("PlaywrightJede1");
    await page.locator("button[type='submit']").click();
    await expect(page.locator(".alert.alert-danger")).not.toBeVisible();
  });
});
