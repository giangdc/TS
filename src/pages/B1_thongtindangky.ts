import { expect, Locator,Page} from "@playwright/test";
import { BasePage } from "./BasePage";

export class B1_thongtindangky extends BasePage {
  readonly Hoten: Locator;
  readonly Sodienthoai: Locator;
  readonly Chontinhthanhpho: Locator;
  readonly Nhapthongtin: Locator;
  readonly Chonphuongxa: Locator;
  readonly Chontenduong: Locator;
  readonly Sohome: Locator;
  readonly Ghichu: Locator; 
  readonly Tieptuc: Locator;


  constructor(page: Page) {
    super(page);
    this.Hoten = page.getByRole('textbox', { name: 'Hsọ tên*' });
    this.Sodienthoai = page.getByRole('textbox', { name: 'Số điện thoại*' });
    this.Chontinhthanhpho = page.getByRole('button', { name: 'Chọn tỉnh thành phố' });
    this.Nhapthongtin = page.getByRole('textbox', { name: 'Nhập thông tin' });
    this.Chonphuongxa = page.getByRole('button', { name: 'Chọn phường/xã' });
    this.Chontenduong = page.getByRole('button', { name: 'Chọn tên đường' });
    this.Sohome = page.getByRole('textbox', { name: 'Số nhà*' });
    this.Ghichu = page.getByRole('textbox', { name: 'Ghi chú' }); 
    this.Tieptuc = page.getByRole('button', { name: 'Tiếp tục' });  
  }

   async fillForm(name: string, phone: string, city: string, ward: string, street: string, houseNumber: string, note: string) {
    await this.Hoten.fill(name);
    await this.Sodienthoai.fill(phone);
    await this.Chontinhthanhpho.click();
    await this.Nhapthongtin.fill(city);
    await this.page.getByText(city).click();
    await this.Chonphuongxa.click();
    await this.page.getByText(ward).click();
    await this.Chontenduong.click();
    await this.page.getByText(street).click();
    await this.Sohome.fill(houseNumber);
    await this.Ghichu.fill(note);       
    }   
}