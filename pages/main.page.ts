import Page from "../pages/page"

const loginButton = ".login"
const registerButton = ".register"
const helpButton = ".help"
const projectsButton = "a.projects"
const homeButton = ".home"
const logoSpan = "span.current-project"
const inputSearchField = "input#q.small"
const dropdownMenu = "div#project-jump.drdn"
const repositoryButton = ".repository"
const boardsButton = ".boards"
const wikiButton = "a.wiki"
const newsButton = ".news"
const issuesButton = ".issues"
const roadmapButton = ".roadmap"
const activityButton = ".activity"
const downloadButton = ".download"
const overviewButton = ".overview"
const myAccountButton = ".my-account"
const logoutButton = ".logout"

export class MainPage extends Page {
    getHelpLink() {
        throw new Error("Method not implemented.")
    }
    constructor(page: Page['page']) {
        super(page)
    }

    async getLoginButton() {
        return await super.getElement(loginButton)
    }

    async getRegisterButton() {
        return await super.getElement(registerButton)
    }

    async getHelpButton() {
        return await super.getElement(helpButton)
    }

    async getProjectsButton() {
        return await super.getElement(projectsButton)
    }


    async getHomeButton() {
        return await super.getElement(homeButton)
    }

    async getLogoButton() {
        return await super.getElement(logoSpan)
    }

    async getInputSearchField() {
        return await super.getElement(inputSearchField)
    }

    async getDropdownMenu() {
        return await super.getElement(dropdownMenu)
    }

    async getRepositoryButton() {
        return await super.getElement(repositoryButton)
    }

    async getBoardsButton() {
        return await super.getElement(boardsButton)
    }

    async getWikiButton() {
        return await super.getElement(wikiButton)
    }

    async getNewsButton() {
        return await super.getElement(newsButton)
    }

    async getIssuesButton() {
        return await super.getElement(issuesButton)
    }

    async getRoadmapButton() {
        return await super.getElement(roadmapButton)
    }

    async getActivityButton() {
        return await super.getElement(activityButton)
    }

    async getDownloadButton() {
        return await super.getElement(downloadButton)
    }

    async getOverviewButton() {
        return await super.getElement(overviewButton)
    }


    async getMyAccountButton() {
        return await super.getElement(myAccountButton)
    }

    async getLogoutButton() {
        return await super.getElement(logoutButton)
    }

    async clickLogoutButton() {
        await super.clickLocator(await this.getLogoutButton())
    }
}
