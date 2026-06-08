import { test, expect } from '@playwright/test';
import { checkA11y, injectAxe } from 'axe-playwright';

const pages = ['/', '/portfolio', '/resume', '/writing'];

for (const path of pages) {
  test(`a11y: ${path}`, async ({ page }) => {
    await page.goto(path);
    await injectAxe(page);
    await checkA11y(page, undefined, {
      detailedReport: true,
      detailedReportOptions: { html: true },
    });
  });
}
