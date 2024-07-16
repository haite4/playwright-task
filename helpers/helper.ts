import { LoginPage } from "../pages/login.page";
import { MainPage } from "../pages/main.page";
import { Page } from "@playwright/test";

export class Helper {
  readonly page: Page;
  readonly loginPage: LoginPage;
  readonly mainPage: MainPage;

  constructor(page: Page, loginPage: LoginPage, mainPage: MainPage) {
    this.page = page;
    this.mainPage = mainPage;
    this.loginPage = loginPage;
  }

  async login(login, password) {
    await this.loginPage.fillUsernameInput(login);
    await this.loginPage.fillPasswordInput(password);
    await this.loginPage.clickLoginButton();
  }

  async logout() {
    if (await (await this.mainPage.getLogoButton()).isVisible()) {
      await this.mainPage.clickLogoutButton();
    }
  }
}
