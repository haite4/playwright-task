import { test, expect } from "@playwright/test";
import { HeaderPage } from "../page-object/header.page";

test.describe("Navbar links Test", () => {
    test("should navigate to correct pages from direct links", async ({ page }) => {
        const headerPage = new HeaderPage(page);

        await headerPage.goto();
        const baseURL = "https://luxequality.com";

        const directLinks = [
            { selector: 'a:has-text("Blog")', expectedPath: "/blog/" },
            { selector: 'a:has-text("Case Studies")', expectedPath: "/case-studies/" }
        ]

        for (const urllink of directLinks) {
            await page.click(urllink.selector)
            const expectedUrl = new URL(urllink.expectedPath, baseURL).href
            await page.waitForURL(expectedUrl);
            const currentUrl = await page.url();

            await expect(currentUrl).toBe(expectedUrl);
        }
    })

})