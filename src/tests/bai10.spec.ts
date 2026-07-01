import test, { expect } from "@playwright/test";

test.describe("Check điều hướng qua checkout giga", () => {
  test("bai9_ test điều hướng qua màn hình checkout ", async ({ page }) => {
    await page.goto("https://staging.tongdaiwifi.vn");
    const card= page.locator("[role='group'][data-slot='carousel-item']").filter({ hasText: "Gói giga" }).getByRole("link", { name: "Đăng ký ngay" });
    await card.click();
    await expect( page.getByText("Thông tin đăng ký")).toBeVisible();
  });

  test("Bai9_ Test thanh toán cod_fail", async ({ page }) => {
    await page.goto("https://staging.tongdaiwifi.vn");
    const card= page.locator("[role='group'][data-slot='carousel-item']").filter({ hasText: "Gói giga" }).getByRole("link", { name: "Đăng ký ngay" });
    await card.click();
    await page.getByRole('textbox', { name: 'Họ tên*' }).fill('test');
    await page.getByRole('textbox', { name: 'Số điện thoại*' }).fill('0964633310');
    await page.getByRole('button', { name: 'Chọn tỉnh thành phố' }).click();
    await page.getByRole('textbox', { name: 'Nhập thông tin' }).type('hồ');
    await page.getByText('Hồ Chí Minh').click();
    await page.getByRole('button', { name: 'Chọn phường/xã' }).click();
    await page.getByText('Phường An Đông').click();
    await page.getByRole('button', { name: 'Chọn tên đường' }).click();
    await page.getByText('Ngô Gia Tự').click();

    await page.getByRole('textbox', { name: 'Số nhà*' }).fill('12');

    await page.getByRole('textbox', { name: 'Ghi chú' }).fill('test nhé');
    await page.getByRole('button', { name: 'Tiếp tục' }).click();
    await page.getByRole('radio', { name: 'Thanh toán khi triển khai' }).check();
    await page.getByRole('button', { name: 'Thanh toán', exact: true }).click();
    //await page.goto('https://staging.fpt.vn/checkout/0000J925IGBK/completed');
    //await page.getByText('Hoàn tất đơn hàng').nth(1).click();
    //await page.getByText('Hoàn tất đơn hàngChưa thanh').click(); 
      //await page.waitForTimeout(7000); // Wait for 7 seconds to allow the page to load completely
    await expect(page.getByText('Hoàn tất đơn hàng').nth(1)).toBeVisible();    
    await expect(page.getByText('Đã thanh toán')).toBeVisible();

    });
    test("Bai9_ Test thanh toán cod_pass", async ({ page }) => {
    await page.goto("https://staging.tongdaiwifi.vn");
    const card= page.locator("[role='group'][data-slot='carousel-item']").filter({ hasText: "Gói giga" }).getByRole("link", { name: "Đăng ký ngay" });
    await card.click();
    await page.getByRole('textbox', { name: 'Họ tên*' }).fill('Test');
    await page.getByRole('textbox', { name: 'Số điện thoại*' }).fill('0964633310');
    await page.getByRole('button', { name: 'Chọn tỉnh thành phố' }).click();
    await page.getByRole('textbox', { name: 'Nhập thông tin' }).type('hồ');
    await page.getByText('Hồ Chí Minh').click();
    await page.getByRole('button', { name: 'Chọn phường/xã' }).click();
    await page.getByText('Phường An Đông').click();
    await page.getByRole('button', { name: 'Chọn tên đường' }).click();
    await page.getByText('Ngô Gia Tự').click();

    await page.getByRole('textbox', { name: 'Số nhà*' }).fill('12');

    await page.getByRole('textbox', { name: 'Ghi chú' }).fill('test nhé');
    await page.getByRole('button', { name: 'Tiếp tục' }).click();
    await page.getByRole('radio', { name: 'Thanh toán khi triển khai' }).check();
    await page.getByRole('button', { name: 'Thanh toán', exact: true }).click();
    //await page.goto('https://staging.fpt.vn/checkout/0000J925IGBK/completed');
    //await page.getByText('Hoàn tất đơn hàng').nth(1).click();
    //await page.getByText('Hoàn tất đơn hàngChưa thanh').click(); 
    
    //await page.waitForTimeout(7000); // Wait for 7 seconds to allow the page to load completely
    await expect(page.getByText('Hoàn tất đơn hàng').nth(1)).toBeVisible();   
    await expect(page.getByText('Chưa thanh toán')).toBeVisible();

    });
});