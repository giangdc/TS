import { test, expect } from '@playwright/test';

  test('Kiểm tra hiển thị thông tin combo Giga', async ({ page }) => {
    await page.goto('https://staging.tongdaiwifi.vn');
    await page.locator('[role="group"]').filter({ hasText: 'Combo Giga' }).getByRole('link', { name: 'Xem chi tiết' }).click();    
    await expect(page.getByText('Combo Giga')).toBeVisible();

});
  test('Đếm số lượng card ở block đầu tiên', async ({ page }) => {
    await page.goto('https://staging.tongdaiwifi.vn');
    const cardCount = await page.locator('[class="relative select-none"]').nth(0).locator('[data-slot="carousel-item"]').count()    ;
    console.log(`Số lượng card trong block đầu tiên: ${cardCount}`);


});
  test('Kiểm tra card gói combo ở card đầu tiên', async ({ page }) => {
    await page.goto('https://staging.tongdaiwifi.vn');
    const card1 = await page.locator('[class="relative select-none"]').first() ;
    expect(await card1.getByText('Combo Giga')).toBeVisible();
});

  test('Kiểm tra click đăng ký ngay gói Combo sky', async ({ page }) => {
    await page.goto('https://staging.tongdaiwifi.vn');
    const card2 = await page.locator('[class="relative select-none"]').first();

    const registerButton = await card2.getByText('Combo Giga').getByRole('link', { name: 'Đăng ký ngay' });
    await registerButton.click();
});

 