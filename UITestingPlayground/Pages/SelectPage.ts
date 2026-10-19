import { Page, Locator, expect } from '@playwright/test';

export class SelectPage {
  readonly page: Page;
  readonly languageDropdown: Locator;
  readonly cityDropdown: Locator;
  readonly productDropdown: Locator;
  readonly colorsDropdown: Locator;
  readonly fruitsDropdown: Locator;
  readonly statusMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    this.languageDropdown = page.locator('#selectLanguage');
    this.cityDropdown = page.locator('#selectCity');
    this.productDropdown = page.locator('#selectProduct');
    this.colorsDropdown = page.locator('#selectColors');
    this.fruitsDropdown = page.locator('#selectFruits');
    this.statusMessage = page.locator('#opstatus');
  }

  async open() {
    await this.page.goto('https://www.uitestingplayground.com/select');
  }

  async selectOptions() {
    await this.languageDropdown.selectOption({ label: 'JavaScript' });
    await this.cityDropdown.selectOption({ label: 'New York' });
    await this.productDropdown.selectOption({ label: 'Release 3.0 Beta' });
    await this.colorsDropdown.selectOption({ label: 'Purple' });
    await this.fruitsDropdown.selectOption({ label: 'Date' });
  }

  async verifySelectedOptions() {
  const expectedText = 'selectLanguage: JavaScript | selectCity: New York | selectProduct: Release 3.0 Beta | selectColors: Purple | selectFruits: Date';

  await expect(this.statusMessage).toContainText(expectedText);
  }
}