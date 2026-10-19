import { Locator, Page } from '@playwright/test';
import { BasePage } from '../Common/BasePage';

export class InventoryPage extends BasePage {
  readonly productItems: Locator;
  readonly sortDropdown: Locator;
  readonly productPrices: Locator;

  constructor(page: Page) {
    super(page);

    this.productItems = page.locator('.inventory_item');
    this.sortDropdown = page.getByRole('combobox');
    this.productPrices = page.locator('.inventory_item_price');
  }

  async getProducts() {
    const count = await this.productItems.count();
    const products = [];

    for (let i = 0; i < count; i++) {
      const item = this.productItems.nth(i);

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

  async getMostExpensiveProducts() {
    const products = await this.getProducts();

    const sortedProducts = [...products].sort(
      (a, b) => b.price - a.price
    );

    const mostExpensiveProducts = sortedProducts.slice(0, 3);

    return mostExpensiveProducts;
  }

  async addProductToCart(productName: string) {
    const productNameLocator = this.page.locator('.inventory_item_name', { hasText: productName });

    const product = this.productItems.filter({has: productNameLocator});

    const addToCartButton = product.getByRole('button', {name: 'Add to cart'});

    await addToCartButton.click();
  }

  async sortByPriceAscending() {
  await this.sortDropdown.selectOption('lohi');
}

async sortByPriceDescending() {
  await this.sortDropdown.selectOption('hilo');
}

async getDisplayedPrices() {
  const count = await this.productPrices.count();
  const prices: number[] = [];

  for (let i = 0; i < count; i++) {
    const priceText = await this.productPrices.nth(i).innerText();
    const price = Number(priceText.replace('$', ''));

    prices.push(price);
  }

  return prices;
}

}