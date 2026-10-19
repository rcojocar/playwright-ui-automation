import { Locator, expect } from '@playwright/test';
import { BasePage } from '../Common/BasePage';

export class LoginPage extends BasePage {
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;

  constructor(page: import('@playwright/test').Page) {
    super(page);

    this.usernameInput = page.getByPlaceholder('Username');
    this.passwordInput = page.getByPlaceholder('Password');
    this.loginButton = page.getByRole('button', { name: 'Login' });
  }

  async login() {
    await this.page.goto('https://www.saucedemo.com/');

    await this.usernameInput.fill('standard_user');
    await this.passwordInput.fill('secret_sauce');
    await this.loginButton.click();

    await expect(this.page).toHaveURL(/inventory/);
  }
}