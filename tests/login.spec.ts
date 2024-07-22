import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";
import valid_creds from "../data/valid_creds.json";
import { faker } from "@faker-js/faker";

test.describe("Login page testing", () => {
  
  test.beforeEach(async ({ loginPage }) => {
    await loginPage.openUrl("login");
  });

  test("Verify all needs elements are visible", async ({ loginPage }) => {
    let webpageElements = [
      loginPage.getLoginSubmitButton(),
      loginPage.getPasswordInput(),
      loginPage.getUserNameInput(),
    ];

    for (let i = 0; i < webpageElements.length; i++) {
      await expect(await webpageElements[i]).toBeVisible();
    }
  });

  test("User can log in with valid credentials", async ({
    mainPage,
    helper,
  }) => {
    for (let i = 0; i < valid_creds.length; i++) {
      await helper.login(valid_creds[i].login, valid_creds[i].password);
      await expect(await mainPage.getMyAccountButton()).toBeVisible();
      await helper.logout();
    }
  });

  test("Verify errors when logging in with invalid credentials", async ({
    loginPage,
    helper,
  }) => {
    let errorsElements = [loginPage.getFlashError()];
    for (let i = 0; i < 6; i++) {
      const login = faker.internet.userName();
      const password = faker.internet.password();
      await helper.login(login, password);
      for (let j = 0; j < errorsElements.length; j++) {
        await expect(await errorsElements[j]).toBeVisible({ timeout: 5000 });
      }
    }
  });

});
