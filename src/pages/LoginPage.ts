import { Page, Locator } from '@playwright/test';
import { BasePage } from './BasePage';

/**
 * ⚠️ VÍ DỤ MẪU ĐỂ ĐỌC — không phải bài nộp của bạn.
 * Đây là 1 Page Object hoàn chỉnh cho màn Login của SauceDemo, để bạn thấy
 * cấu trúc chuẩn (locator gom trong class, method hành động). Bài tập của bạn
 * (Bài 12–15) sẽ TỰ viết các page khác: InventoryPage, CartPage, CheckoutPage...
 *
 * Locator: ưu tiên ngữ nghĩa (getByPlaceholder/getByRole); dùng #id khi không có cách ngữ nghĩa.
 */
export class LoginPage extends BasePage {
  private readonly username: Locator;
  private readonly password: Locator;
  private readonly loginButton: Locator;
 //// private readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.getByPlaceholder('Username');
    this.password = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
    //// this.errorMessage = page.locator('[data-test="error"]');
  }

  async open(): Promise<void> {
    await this.goto('/');
  }

  async login(user: string, pass: string): Promise<void> {
    await this.username.fill(user);
    await this.password.fill(pass);
    await this.loginButton.click();
  }

  //async getError(): Promise<string> {
  //  return (await this.errorMessage.textContent()) || '';
  //}
}
