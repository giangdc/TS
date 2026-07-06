import { Page, Locator, expect } from '@playwright/test';

/**
 * BasePage — lớp cha trừu tượng cho mọi Page Object.
 * Chứa các hành động dùng chung: điều hướng, chờ, screenshot, scroll...
 * Các page class (LoginPage, InventoryPage...) kế thừa lớp này.
 */
export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  /** Điều hướng tới đường dẫn tương đối (dùng baseURL trong playwright.config.ts). */
  async goto(path: string = '/'): Promise<void> {
    await this.page.goto(path);
  }

  /** Chờ 1 element hiển thị (web-first assertion, tự retry tới timeout). */
  async waitForVisible(locator: Locator, timeout = 10_000): Promise<void> {
    await expect(locator).toBeVisible({ timeout });
  }

  /** Lấy URL hiện tại. */
  async getURL(): Promise<string> {
    return this.page.url();
  }

  /** Chụp màn hình với tên file cho trước. */
  async screenshot(name: string): Promise<void> {
    await this.page.screenshot({ path: `test-results/${name}.png`, fullPage: true });
  }

  /** Cuộn element vào tầm nhìn. */
  async scrollIntoView(locator: Locator): Promise<void> {
    await locator.scrollIntoViewIfNeeded();
  }

  errorMessage(message: string): Locator {
    return this.page.getByText(message);
  }
}
