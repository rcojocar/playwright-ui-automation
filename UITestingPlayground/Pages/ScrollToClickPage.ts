import { Locator, Page, expect } from '@playwright/test';

export class ScrollToClickPage {
  readonly page: Page;
  readonly firstButton: Locator;
  readonly secondButton: Locator;
  readonly thirdButton: Locator;
  readonly fourthButton: Locator;
  readonly fourthButtonRow: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstButton = page.locator(
      "xpath=//button[contains(., 'Button 1')]"
    );
    this.secondButton = page.locator(
      "xpath=//button[contains(., 'Button 2')]"
    );
    this.thirdButton = page.locator(
      "xpath=//button[contains(., 'Button 3')]"
    );
    this.fourthButton = page.locator(
      "xpath=//button[contains(., 'Flag')]"
    );

    this.fourthButtonRow = page.locator('#targetRow4');
  }

  async open() {
    await this.page.goto(
      'https://www.uitestingplayground.com/scrolltoclick'
    );
  }

  async clickAllButtons() {
    await this.firstButton.scrollIntoViewIfNeeded();
    await this.firstButton.click();

    await this.secondButton.scrollIntoViewIfNeeded();
    await this.secondButton.click();

    await this.thirdButton.scrollIntoViewIfNeeded();
    await this.thirdButton.click();

    await this.fourthButtonRow.hover();
    await this.fourthButton.click();
  }

  async verifyAllButtonsClicked() {
  const resultMessage = this.page.getByText('All buttons clicked!');

  await resultMessage.scrollIntoViewIfNeeded();
  await expect(resultMessage).toBeVisible();
  }
}