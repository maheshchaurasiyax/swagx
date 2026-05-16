import dotenv from 'dotenv';
dotenv.config();
import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';





type MyFixtures = {

  loginPage: LoginPage;

  inventoryPage: InventoryPage;
};

export const test = base.extend<MyFixtures>({

  loginPage: async ({ page }, use) => {

    const loginPage = new LoginPage(page);


    await loginPage.goto();

    await loginPage.login(

      process.env.USERNAMES!,
      process.env.PASSWORDS!


      
    );

    await use(loginPage);




  },

  inventoryPage: async ({ page }, use) => {

    const inventoryPage = new InventoryPage(page);

    await use(inventoryPage);

  }

});

export { expect };