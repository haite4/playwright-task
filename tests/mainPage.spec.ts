import { expect } from "@playwright/test";
import { test } from "../fixtures/fixtures";

test.describe("Main page testing", () => {
  test.beforeEach(async ({ mainPage }) => {
    await mainPage.openBaseUrl();
  });

  test("Verify top-menu elements are visible", async ({ mainPage }) => {
    let topMenuElements = [
      mainPage.getHelpButton(),
      mainPage.getLoginButton(),
      mainPage.getProjectsButton(),
      mainPage.getRegisterButton(),
      mainPage.getHomeButton(),
    ];

    for (let i = 0; i < topMenuElements.length; i++) {
      await expect(await topMenuElements[i]).toBeVisible();
    }
  });

  test("Verify header elements are visible", async ({ mainPage }) => {
    let headerElements = [
      mainPage.getLogoButton(),
      mainPage.getInputSearchField(),
      mainPage.getDropdownMenu(),
      mainPage.getRepositoryButton(),
      mainPage.getBoardsButton(),
      mainPage.getWikiButton(),
      mainPage.getNewsButton(),
      mainPage.getIssuesButton(),
      mainPage.getRoadmapButton(),
      mainPage.getActivityButton(),
      mainPage.getDownloadButton(),
      mainPage.getOverviewButton(),
    ];

    for (let i = 0; i < headerElements.length; i++) {
      await expect(await headerElements[i]).toBeVisible();
    }
  });
});
