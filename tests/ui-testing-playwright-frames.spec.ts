import { test } from '@playwright/test';
import { FramesPage } from '../UITestingPlayground/Pages/FramesPage';

test('click buttons in the outer and inner frames', async ({ page }) => {
  const framesPage = new FramesPage(page);

  await framesPage.open();

  for (const buttonName of ['Edit', 'Submit', 'Click me', 'Primary']) {
    await framesPage.clickOuterButton(buttonName);
    await framesPage.clickInnerButton(buttonName);
  }
});