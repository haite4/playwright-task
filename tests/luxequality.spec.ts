import { test, expect } from "@playwright/test";
import { LuxeQualityPage } from "../page-object/luxequality.page"
import { AssistantPage } from "../page-object/assistant.page"

test("Verify navigation to LuxeQuality homepage", async ({ page }) => {
    const luxequalityPage = new LuxeQualityPage(page);

    await luxequalityPage.goto();

    const currentUrl = page.url();

    const expectedUrl = "https://luxequality.com/";

    await expect(currentUrl).toBe(expectedUrl);

})

test("Verify Notification Display on Page Load", async ({ page }) => {
    const assistantPage = new AssistantPage(page);

    await assistantPage.goto();

    const iframeSelector = await assistantPage.getNotificationContentLocator();

    await page.waitForTimeout(10000)

    await expect(iframeSelector).toBeVisible();

})


