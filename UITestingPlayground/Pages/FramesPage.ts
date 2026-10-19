import { Locator, Page, expect } from '@playwright/test';

export class FramesPage {
  readonly page: Page;
  readonly outerFrame: ReturnType<Page['frameLocator']>;
  readonly innerFrame: ReturnType<Page['frameLocator']>;

  constructor(page: Page) 
  {
    this.page = page;

    this.outerFrame = page.frameLocator('#frame-outer');
    this.innerFrame = this.outerFrame.frameLocator('#frame-inner');
  }

  async open() { await this.page.goto('https://www.uitestingplayground.com/frames');}

  async clickOuterButton(buttonName: string) 
  {
   const button = this.outerFrame.locator(
     `[onclick="showResult('${buttonName}')"]`
   );

   await button.click();

   await expect(this.outerFrame.locator('#result'))
    .toHaveText(`Button pressed: ${buttonName}`);
  }

  async clickInnerButton(buttonName: string) 
  {
   const button = this.innerFrame.locator(
     `[onclick="showResult('${buttonName}')"]`
   );

   await button.click();

   await expect(this.innerFrame.locator('#result'))
     .toHaveText(`Button pressed: ${buttonName}`);
  }
}