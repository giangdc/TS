import test, { expect } from "@playwright/test";

    test("Bai10_ Kiểm tra URL toBeVisible toBeChecked", async ({ page }) => {
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
    await expect(page.getByRole('radio', { name: 'Thanh toán khi triển khai' })).toBeChecked();

    await page.getByRole('button', { name: 'Thanh toán', exact: true }).click();
    //await page.goto('https://staging.fpt.vn/checkout/0000J925IGBK/completed');
    //await page.getByText('Hoàn tất đơn hàng').nth(1).click();
    //await page.getByText('Hoàn tất đơn hàngChưa thanh').click(); 
    
    
    await expect(page).toHaveURL(/completed/,{ timeout: 150000 });
    await expect(page.getByText('Hoàn tất đơn hàng').nth(1)).toBeVisible();
    await expect(page.getByRole('button', { name: 'Đóng' })).toBeEnabled(); 
    
    });
