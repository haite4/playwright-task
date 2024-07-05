import  { Page, Locator} from "@playwright/test";
import { LuxeQualityPage } from "./luxequality.page";


export class AssistantPage extends  LuxeQualityPage{
    readonly page: Page;
    readonly helpcrunchIframe: string = 'iframe[name="helpcrunch-iframe"]';
    readonly helpcrunchContent: string = '.helpcrunch-notification-content'

    constructor (page: Page){
        super(page)
        this.page = page
    }

    async getNotificationContentLocator(): Promise <Locator>{
        return await this.page.frameLocator(this.helpcrunchIframe).locator(this.helpcrunchContent);
        
    }
}