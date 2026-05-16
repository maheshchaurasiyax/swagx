import { test, expect } from '../fixtures/baseTest';
import { testData } from '../utils/testData';




test('Valid Login', async ({
    page,
    loginPage
   
   }) => {



   await expect(page)
      .toHaveURL(/inventory/);


      
});





test('Invalid Login', async ({ 
   
   page,
   loginPage

}) => {

   await loginPage.goto();
   await loginPage.login(

      'wrong_user',
      'wrong_pass'
   );

   await expect(
      page.locator(
       '[data-test="error"]'
      )
   ).toBeVisible();

});
