import test, { test as setup,errors, expect } from "@playwright/test";
import { HomeECP } from "../pages/HomeECP";

const stateFile = "playwright/.auth/user.json";

setup("setup", async ({ page }) => {
  await page.goto("http://ecp-stag.fpt.net/");
    const homeECP = new HomeECP(page);
    await homeECP.loginECP("test003@fpt.com", "Abc@123456");
    await page.context().storageState({ path: stateFile });
});