import { test } from '@playwright/test';
import { UploadPage } from '../UITestingPlayground/Pages/UploadPage';

test('upload two text files', async ({ page }) => {
  const uploadPage = new UploadPage(page);

  await uploadPage.open();
  await uploadPage.uploadFiles();
  await uploadPage.verifyFilesUploaded();
});