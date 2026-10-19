import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../Common/BasePage';

export class CheckoutStepTwoPage extends BasePage {
  readonly finishButton: Locator;
  readonly itemTotalLabel: Locator;

  constructor(page: Page) {
    super(page);

    this.finishButton = page.getByRole('button', { name: 'Finish' });
    this.itemTotalLabel = page.locator('.summary_subtotal_label');
  }

  async getCheckoutItemTotal() {
    const itemTotalText = await this.itemTotalLabel.innerText();

    const itemTotal = Number(
      itemTotalText.replace('Item total: $', '')
    );

    return itemTotal;
  }

  async finishCheckout() {
    await this.finishButton.click();

    await expect(
      this.page.getByText('Thank you for your order!')
    ).toBeVisible();
  }
}