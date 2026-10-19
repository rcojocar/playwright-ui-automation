import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../Common/BasePage';

export class CartPage extends BasePage {
  readonly cartItems: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    super(page);

    this.cartItems = page.locator('.cart_item');
    this.checkoutButton = page.getByRole('button', {
      name: 'Checkout'
    });
  }

  async getCartProducts() {
    await expect(this.page).toHaveURL(/cart\.html/);

    const count = await this.cartItems.count();
    const products = [];

    for (let i = 0; i < count; i++) {
      const item = this.cartItems.nth(i);

      const name = await item
        .locator('.inventory_item_name')
        .innerText();

      const priceText = await item
        .locator('.inventory_item_price')
        .innerText();

      const price = Number(priceText.replace('$', ''));

      products.push({ name, price });
    }

    return products;
  }

  async goToCheckout() {
    await this.checkoutButton.click();

    await expect(this.page).toHaveURL(/checkout-step-one/);
  }
}