import { Page } from '@playwright/test';
import { testData } from '../utils/testData';

export class CartPage {

  constructor(private page: Page) {}

  async checkout(first: string, last: string, zip: string) {

    await this.page.click('#checkout');

    await this.page.fill('#first-name', first);
    await this.page.fill('#last-name', last);
    await this.page.fill('#postal-code', zip);

    await this.page.click('#continue');
    await this.page.click('#finish');
  }

  async getSuccessMessage() {
    return this.page.locator('.complete-header').innerText();

  }
}