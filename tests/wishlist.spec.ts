import { test, expect } from '@playwright/test';

test('add product to wishlist', async ({ page }) => {
  await page.goto('http://localhost:5173/src/');

  await page.getByRole('button', { name: 'Add to Wishlist' }).nth(0).click();

  await expect(page.getByRole('button', { name: '<3' })).toHaveText(/1/);
});
