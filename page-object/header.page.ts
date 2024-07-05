import { Page } from "@playwright/test";
import { LuxeQualityPage } from "./luxequality.page";


export class HeaderPage extends LuxeQualityPage{
    readonly page: Page

    constructor(page:Page){
        super(page)
        this.page = page
    }


}