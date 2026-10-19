import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../Common/BasePage';

export class CheckoutCompletePage extends BasePage {
  readonly backHomeButton: Locator;

  constructor(page: Page) {
    super(page);

    this.backHomeButton = page.getByRole('button', {
      name: 'Back Home'
    });
  }

  async backHome() {
    await this.backHomeButton.click();

    await expect(this.page).toHaveURL(/inventory\.html/);
  }
}