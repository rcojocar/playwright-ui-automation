import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from './BasePage';

export class HeaderControl extends BasePage {
  readonly cartLink: Locator;

  constructor(page: Page) {
    super(page);

    this.cartLink = page.locator('.shopping_cart_link');
  }

  async openCart() {
    await this.cartLink.click();

    await expect(this.page).toHaveURL(/cart\.html/);
  }
}