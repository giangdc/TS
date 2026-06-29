import { test, expect } from '@playwright/test';

test('Bai8_case 1_Kiểm tra login thành công-> hiện menu Dashboard', async ({ page }) => {
  await page.goto('http://ecp-stag.fpt.net');
  //await page.getByRole('textbox', { name: 'Enter your email or username' }).click();
  await page.getByPlaceholder('Enter your email or username').fill('test003@fpt.com');
  await page.getByRole('textbox', { name: '******' }).fill('Aa@123456');
  await page.getByRole('button', { name: 'login' }).click();

  await expect(page.getByText('Dashboard',{ exact: false })).toBeVisible();

});
test('Bai8_case 2_Kiểm tra login thành công-> Nhưng không có hiện menu invalid_case fail', async ({ page }) => {
  await page.goto('http://ecp-stag.fpt.net');
  //await page.getByRole('textbox', { name: 'Enter your email or username' }).click();
  await page.getByPlaceholder('Enter your email or username').fill('test003@fpt.com');
  await page.getByRole('textbox', { name: '******' }).fill('Aa@123456');
  await page.getByRole('button', { name: 'login' }).click();

  await expect(page.getByText('Dashboard',{ exact: true })).toBeVisible();

});