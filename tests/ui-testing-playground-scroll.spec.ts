import { test, expect } from '@playwright/test';
import { ScrollToClickPage } from '../UITestingPlayground/Pages/ScrollToClickPage';

test('click all four buttons on Scroll To Click', async ({ page }) => {
  const scrollToClickPage = new ScrollToClickPage(page);

  await scrollToClickPage.open();
  await scrollToClickPage.clickAllButtons();
  await scrollToClickPage.verifyAllButtonsClicked();
});