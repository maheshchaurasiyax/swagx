import { test , expect } from '../fixtures/baseTest';

import { CartPage } from '../pages/CartPage';

import { testData } from '../utils/testData';

test('Complet Checkout flow', async ({
   page,
   loginPage,
   inventoryPage
}) => {

   const cart = new CartPage(page);

   

   // Add Product

   await inventoryPage.addProductToCart(
      'sauce-labs-bolt-t-shirt'
   );

   // Open Cart

   await inventoryPage.openCart();

   // Checkout

   await cart.checkout(
      'Mahesh',
      'Kumar',
      '221401'
   );

   // Verify Success Message

   const message =
      await cart.getSuccessMessage();

   console.log(message);

   await expect(message)
      .toContain('Thank you');

      
});