//playwright test e2e/login.spec.js --headed

import { test } from '@playwright/test';

test('login', async ({ page }) => {
  await page.goto('/login');

  await page.click('text=Login');
  await page.fill('input[name="username"]', 'admin');
  await page.fill('input[name="password"]', 'admin');
  await page.click('text=Login');

  //do something
  await page.click('text=Logout');
});
