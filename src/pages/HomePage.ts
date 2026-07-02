import { Page } from "@playwright/test";

export class HomePage {
    constructor(private page: Page) {}

    async navigateToHomePage() {
        await this.page.goto("https://staging.tongdaiwifi.vn");
    }
}