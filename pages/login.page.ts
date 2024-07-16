import Page from "./page";

const usernameInput = "#username";
const passwordInput = "#password";
const loginSubmitButton = "#login-submit";
const flashError = "#flash_error";

export class LoginPage extends Page {
  constructor(page: Page["page"]) {
    super(page);
  }

  async getUserNameInput() {
    return await super.getElement(usernameInput);
  }

  async getPasswordInput() {
    return await super.getElement(passwordInput);
  }

  async getLoginSubmitButton() {
    return await super.getElement(loginSubmitButton);
  }

  async fillUsernameInput(text: string) {
    await super.enterText(await this.getUserNameInput(), text);
  }

  async fillPasswordInput(text: string) {
    await super.enterText(await this.getPasswordInput(), text);
  }

  async clickLoginButton() {
    await this.clickLocator(await this.getLoginSubmitButton());
  }

  async getFlashError() {
    return await super.getElement(flashError);
  }
}
