import { test, expect } from '@playwright/test';

  test('Kiểm tra hiển thị thông tin combo Giga', async ({ page }) => {
    await page.goto('https://staging.tongdaiwifi.vn');
    await page.locator('[role="group"]').filter({ hasText: 'Combo Giga' }).getByRole('link', { name: 'Xem chi tiết' }).click();    
    await expect(page.getByText('Combo Giga')).toBeVisible();
});

 