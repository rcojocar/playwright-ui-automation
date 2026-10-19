import { Locator, Page, expect } from '@playwright/test';
import { BasePage } from '../Common/BasePage';

export class CheckoutPage extends BasePage {
  readonly firstNameInput: Locator;
  readonly lastNameInput: Locator;
  readonly postalCodeInput: Locator;
  readonly continueButton: Locator;

  constructor(page: Page) {
    super(page);

    this.firstNameInput = page.getByPlaceholder('First Name');
    this.lastNameInput = page.getByPlaceholder('Last Name');
    this.postalCodeInput = page.getByPlaceholder('Zip/Postal Code');
    this.continueButton = page.getByRole('button', {
      name: 'Continue'
    });
  }

  async fillCheckoutInformation() {
    await this.firstNameInput.fill('Dan');
    await this.lastNameInput.fill('Jones');
    await this.postalCodeInput.fill('1060');
  }

  async continueCheckout() {
    await this.continueButton.click();

    await expect(this.page).toHaveURL(/checkout-step-two/);
  }
}