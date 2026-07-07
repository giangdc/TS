import test, { errors, expect } from "@playwright/test";
import { Homepage } from "../pages/HomePage";
import { B1_thongtindangky } from "../pages/B1_thongtindangky";




test.describe("Bai13_ Kiểm tra trường họ tên", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    const homepage = new Homepage(page);
    await homepage.clickGigaCard();
  });

  test("Bai13_ Kiểm tra không nhập ho ten", async ({ page }) => {
    const b1Page = new B1_thongtindangky(page);
    await b1Page.Hoten.fill(" "); 
    await b1Page.Tieptuc.click();
    await expect(b1Page.errorMessage("Vui lòng nhập họ tên")).toBeVisible();
  });
  test("Bai13_ kiểm tra nhập ho ten không hợp lệ", async ({ page }) => {
    const b1Page = new B1_thongtindangky(page);
    await b1Page.Hoten.fill("123456@#"); 
    await b1Page.Tieptuc.click();
    await expect(b1Page.errorMessage("Họ tên không hợp lệ")).toBeVisible();
  });
}); 

test.describe("Bai13_ Kiểm tra trường sdt", () => {

    test.beforeEach(async ({ page }) => {
    await page.goto("/");
    const homepage = new Homepage(page);
    await homepage.clickGigaCard();
  });
  test("Bai13_ Kiểm tra không nhập sdt", async ({ page }) => {
    const b1Page = new B1_thongtindangky(page);
    await b1Page.Sodienthoai.fill(" "); 
    await b1Page.Tieptuc.click();
    await expect(b1Page.errorMessage("Vui lòng nhập số điện thoại")).toBeVisible();
  });
  test("Bai13_ kiểm tra nhập sdt không hợp lệ", async ({ page }) => {
    const b1Page = new B1_thongtindangky(page);
    await b1Page.Sodienthoai.fill("123456"); 
    await b1Page.Tieptuc.click();
    await expect(b1Page.errorMessage("Số điện thoại không hợp lệ")).toBeVisible();
  });
}); 