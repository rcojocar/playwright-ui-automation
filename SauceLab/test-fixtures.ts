import { test as base } from '@playwright/test';

import { LoginPage } from './Pages/LoginPage';
import { InventoryPage } from './Pages/InventoryPage';
import { HeaderControl } from './Common/HeaderControl';
import { CartPage } from './Pages/CartPage';
import { CheckoutPage } from './Pages/CheckoutPage';
import { CheckoutStepTwoPage } from './Pages/CheckoutStepTwoPage';
import { CheckoutCompletePage } from './Pages/CheckoutCompletePage';

type SauceLabFixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  headerControl: HeaderControl;
  cartPage: CartPage;
  checkoutPage: CheckoutPage;
  checkoutStepTwoPage: CheckoutStepTwoPage;
  checkoutCompletePage: CheckoutCompletePage;
};

export const test = base.extend<SauceLabFixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },

  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },

  headerControl: async ({ page }, use) => {
    await use(new HeaderControl(page));
  },

  cartPage: async ({ page }, use) => {
    await use(new CartPage(page));
  },

  checkoutPage: async ({ page }, use) => {
    await use(new CheckoutPage(page));
  },

  checkoutStepTwoPage: async ({ page }, use) => {
    await use(new CheckoutStepTwoPage(page));
  },

  checkoutCompletePage: async ({ page }, use) => {
    await use(new CheckoutCompletePage(page));
  },
});

export { expect } from '@playwright/test';