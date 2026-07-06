import test, { errors, expect } from "@playwright/test";
import { Homepage } from "../pages/HomePage";
import { B1_thongtindangky } from "../pages/B1_thongtindangky";


test.beforeEach(async ({ page }) => {
  await page.goto("https://staging.tongdaiwifi.vn");
  const homepage = new Homepage(page);
  await homepage.clickGigaCard();
});

test.describe("Bai12_ Kiểm tra URL toBeVisible toBeChecked", () => {
  test("Bai12_ Kiểm tra trường họ tên", async ({ page }) => {
    const b1Page = new B1_thongtindangky(page);
    await b1Page.Hoten.fill(" "); 
    await b1Page.Tieptuc.click();
    await expect(b1Page.errorMessage("Vui lòng nhập họ tên")).toBeVisible();
    await expect(b1Page.errorMessage("Vui lòng nhập số điện thoại")).toBeVisible();

    await b1Page.Sodienthoai.fill("a");
    await expect(b1Page.errorMessage("Số điện thoại không hợp lệ")).toBeVisible(); 

  });
}); 