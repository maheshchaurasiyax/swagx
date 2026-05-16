import{ test, expect } from '../fixtures/baseTest';
import { testData } from '../utils/testData';



test('Add Product to Cart', async ({

  page,
  loginPage,
  inventoryPage
  
 }) =>{
  

//Add Product
 await inventoryPage.addProductToCart(
   'sauce-labs-bolt-t-shirt'
);

//await expect(
 //page.locator('text=Remove')).toBeVisible();});

await expect(
    page.locator('.shopping_cart_badge')).toHaveText('1');
    
    console.log('Product Add Successfully');

    await inventoryPage.logout();

  });







  //use of loop to add multiple product to cart 

test('Add multiple product to cart', async ({
  page,
  loginPage,
  inventoryPage
}) =>{



  const products = [
    'sauce-labs-backpack',
    'sauce-labs-bike-light',
    'sauce-labs-bolt-t-shirt',
    'sauce-labs-fleece-jacket',
    'test.allthethings()-t-shirt-(red)'
  ];

  for(const product of products){

    await inventoryPage.addProductToCart(product);
  }
  console.log(products.length + ' products added to cart successfully');

  await inventoryPage.logout();

});




/// Remove test case

test('Remove Product From Cart', async({
  page,
  loginPage,
  inventoryPage

}) =>{

   
await inventoryPage.addProductToCart( 'test.allthethings()-t-shirt-(red)'
);

await inventoryPage.removeProduct();

await expect(
 page.locator('text=Add to cart').first()
).toBeVisible();


console.log('Product removed successfully');

await inventoryPage.logout();

});



test('Open Cart', async({
  page,
  loginPage,
  inventoryPage

}) =>{
  
await inventoryPage.addProductToCart( 'test.allthethings()-t-shirt-(red)'
);
await inventoryPage.openCart();

await expect(
 page.locator('#checkout')
).toBeEnabled();

await expect(page.locator('.title')).toHaveText('Your Cart');

console.log('Open cart verify sucessfully');


await inventoryPage.logout();

});




test('Sort product low to high', async({
  
  page,
  loginPage,
  inventoryPage

}) =>{


  await inventoryPage.sortLowToHight();

  await expect(
 page.locator('.product_sort_container')
).toHaveValue('lohi');

await inventoryPage.logout();});



test('Remove multiple product from cart', async({
  page,
  loginPage,
  inventoryPage
}) =>{



  const products = [
    'sauce-labs-backpack',
    'sauce-labs-bike-light'
  ]


// Add multiple product to cart

for(const product of products){
  await inventoryPage.addProductToCart(product);

}

// Remove multiple product from cart

for (const product of products){
  await inventoryPage.removeProductMultiple(product);


  console.log('product removed successfully');
}
await inventoryPage.logout();


});

