import { expect, Locator,Page} from "@playwright/test";
import { BasePage } from "./BasePage";

export class HomeECP extends BasePage {
  readonly Email: Locator;
  readonly Password: Locator;
  readonly LoginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.Email = page.getByRole('textbox', { name: 'Enter your email or username' });
    this.Password = page.getByRole('textbox', { name: '******' });
    this.LoginButton = page.getByRole('button', { name: 'login' });
  }
  async loginECP(email: string, password: string) {
    await this.Email.fill(email);
    await this.Password.fill(password);
    await this.LoginButton.click();
  }

}