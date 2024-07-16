import { Page as PlaywrightPage } from "@playwright/test";
import { Locator } from "@playwright/test";

export default class Page {
  public page: PlaywrightPage;

  constructor(page: PlaywrightPage) {
    this.page = page;
  }

  async openUrl(path: string) {
    await this.page.goto(path, { waitUntil: "load" });
  }

  async openBaseUrl() {
    await this.openUrl("/");
  }

  async getElement(selector: string) {
    return this.page.locator(selector);
  }

  async clickLocator(locator: Locator) {
    await locator.click();
  }

  async enterText(locator: Locator, text: string) {
    await locator.fill(text);
  }
}
