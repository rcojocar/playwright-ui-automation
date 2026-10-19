import { Locator, Page, expect } from '@playwright/test';

export class UploadPage {
  readonly page: Page;
  readonly fileInput: Locator;
  readonly confirmationMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    
    
    const uploadFrame = page.frameLocator(
  'iframe[src="/static/upload.html"]'
);

this.fileInput = uploadFrame.locator('.browse-btn');
this.confirmationMessage = uploadFrame.locator("//div[@class='success-file']//p");
  }

  async open() {
    await this.page.goto(
      'https://www.uitestingplayground.com/upload'
    );
  }

  async uploadFiles() {
  
  await this.fileInput.setInputFiles([
    'UITestingPlayground/TestingFiles/first.txt',
    'UITestingPlayground/TestingFiles/second.txt',
  ]);
}

  async verifyFilesUploaded() {
  

  await expect(this.confirmationMessage).toHaveText('2 file(s) selected');
  }
}