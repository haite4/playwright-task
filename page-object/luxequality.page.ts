import { type Page } from "@playwright/test";


export class LuxeQualityPage {

    readonly page: Page

    constructor(page: Page) {
        this.page = page
    }


    async goto() {
        await this.page.goto("https://luxequality.com")
    }

}