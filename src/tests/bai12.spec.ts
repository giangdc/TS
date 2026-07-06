import { expect, test } from "@playwright/test";
import { Homepage } from "../pages/HomePage";
import { B1_thongtindangky } from "../pages/B1_thongtindangky";


test.describe("Bai12_ Kiểm tra URL toBeVisible toBeChecked", () => {
  test("Bai12_ Kiểm tra URL toBeVisible toBeChecked", async ({ page }) => {
    await page.goto("https://staging.tongdaiwifi.vn");

    const homepage = new Homepage(page);
    await homepage.clickGigaCard();

    

    const b1Page = new B1_thongtindangky(page);
    await b1Page.fillForm(
      "Test",
      "0964633310",
      "Hồ Chí Minh",
      "Phường An Đông",
      "Ngô Gia Tự",
      "12",
      "test nhé"
    );
    await b1Page.Tieptuc.click();
    await expect(page.getByText("Thông tin sản phẩm")).toBeVisible(); 
  });
});