import { Locator, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class Homepage  extends BasePage{page: Page;
  readonly cardGiga: Locator;
  readonly cardComboGiga: Locator;

  constructor(page: Page) {
    super(page);

    this.cardGiga = page.locator("[role='group'][data-slot='carousel-item']").filter({ hasText: "Gói giga" }).getByRole("link", { name: "Đăng ký ngay" });
    this.cardComboGiga = page.locator("[role='group'][data-slot='carousel-item']").filter({ hasText: "Combo Giga" }).getByRole("link", { name: "Đăng ký ngay" });
  }


  async clickGigaCard() {
    await this.cardGiga.click();
  }

  async clickComboGiga() {
    await this.cardComboGiga.click();
  }
}