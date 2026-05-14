import{ test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { testData } from '../utils/testData';



let inventory : InventoryPage;

test.beforeAll(async () => {

   console.log('Inventory Test Execution Started');

});


test.beforeEach(async ({ page})=>{
  const login = new LoginPage(page);

  inventory = new InventoryPage(page);

  await login.goto();

  await login.login(testData.username , testData.password);

});

test.afterEach(async({ page }, testInfo) =>{

  console.log('Test Completed');

  await page.screenshot({ path :`screenshots/${ testInfo.title}.png` });

});

test('Add Product to Cart', async ({ page }) =>{

  
//Add Product
await inventory.addProductToCart(
   'sauce-labs-bolt-t-shirt'
);


//Verify cart badge

//await expect(
 //page.locator('text=Remove')).toBeVisible();});

await expect(
    page.locator('.shopping_cart_badge')).toHaveText('1');
    
    console.log('Product Add Successfully');

    await inventory.logout();

  });


  //use of loop to add multiple product to cart 

test('Add multiple product to cart', async ({page}) =>{


  const products = [
    'sauce-labs-backpack',
    'sauce-labs-bike-light',
    'sauce-labs-bolt-t-shirt',
    'sauce-labs-fleece-jacket',
    'test.allthethings()-t-shirt-(red)'
  ];

  for(const product of products){

    await inventory.addProductToCart(product);
  }
  console.log(products.length + ' products added to cart successfully');

  await inventory.logout();

});




/// Remove test case

test('Remove Product From Cart', async({page}) =>{
   
await inventory.addProductToCart( 'test.allthethings()-t-shirt-(red)'
);

await inventory.removeProduct();

await expect(
 page.locator('text=Add to cart').first()
).toBeVisible();


console.log('Product removed successfully');

await inventory.logout();

});



test('Open Cart', async({page}) =>{


await inventory.addProductToCart( 'test.allthethings()-t-shirt-(red)'
);
await inventory.openCart();

await expect(
 page.locator('#checkout')
).toBeEnabled();

await expect(page.locator('.title')).toHaveText('Your Cart');

console.log('Open cart verify sucessfully');


await inventory.logout();

});




test('Sort product low to high', async({page}) =>{

  await inventory.sortLowToHight();

  await expect(
 page.locator('.product_sort_container')
).toHaveValue('lohi');

await inventory.logout();});



test('Remove multiple product from cart', async({page}) =>{

  const products = [
    'sauce-labs-backpack',
    'sauce-labs-bike-light'
  ]


// Add multiple product to cart

for(const product of products){
  await inventory.addProductToCart(product);

}

// Remove multiple product from cart

for (const product of products){
  await inventory.removeProductMultiple(product);


  console.log('product removed successfully');
}
await inventory.logout();


});

