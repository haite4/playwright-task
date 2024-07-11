import { test as base } from "@playwright/test"
import Page from "../pages/page"
import { LoginPage } from "../pages/login.page"
import { MainPage } from "../pages/main.page"
import { Helper } from "../helpers/helper"

type MyFixtures = {
    basePage: Page
    loginPage: LoginPage,
    mainPage: MainPage,
    helper: Helper
}


export const test = base.extend<MyFixtures>({
    basePage: async ({ page }, use) => {
        await use(new Page(page))
    },
    loginPage: async ({ page }, use) => {
        await use(new LoginPage(page))
    },
    mainPage: async ({ page }, use) => {
        await use(new MainPage(page))
    },
    helper: async ({ page, loginPage, mainPage }, use) => {
        await use(new Helper(page, loginPage, mainPage))
    }
})

