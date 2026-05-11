import{ test, expect } from '@playwright/test';

import { LoginPage } from '../pages/LoginPage';
import { testData } from '../utils/testData';



test('Valid Login', async({page}) =>{

   const login = new LoginPage(page);

   await login.goto();

   await login.login(testData.username , testData.password);


   await expect(page).toHaveURL(/inventory/);
});