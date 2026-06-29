import { test, expect } from '@playwright/test';

test('Test bài 7 nhé ', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).click();
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('option 1');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).fill('option 2');
  await page.getByRole('textbox', { name: 'What needs to be done?' }).press('Enter');
  await page.getByRole('listitem').filter({ hasText: 'option 1' }).getByLabel('Toggle Todo').check();
  await page.getByRole('listitem').filter({ hasText: 'option 2' }).getByLabel('Toggle Todo').check();
});