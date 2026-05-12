import { test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';

import { testData } from '../utils/testData';

let login: LoginPage;

test.beforeEach(async ({ page }) => {

   login = new LoginPage(page);

   await login.goto();

});





test('Valid Login', async ({ page }) => {

   await login.login(
      testData.username,
      testData.password
   );

   await expect(page)
      .toHaveURL(/inventory/);

});





test('Invalid Login', async ({ page }) => {

   await login.login(
      'wrong_user',
      'wrong_pass'
   );

   await expect(
      page.locator(
       '[data-test="error"]'
      )
   ).toBeVisible();

});
