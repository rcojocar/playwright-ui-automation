
import { test, expect } from '@playwright/test';
import { SelectPage } from '../UITestingPlayground/Pages/SelectPage';

test('select the required options', async ({ page }) => {
  const selectPage = new SelectPage(page);

  await selectPage.open();
  await selectPage.selectOptions();

  await selectPage.verifySelectedOptions();
});
