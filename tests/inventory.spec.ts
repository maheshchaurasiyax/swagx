import{ test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { inventoryPage } from '../pages/InventoryPage';
import { testData } from '../utils/testData';



test('Add Product to Cart', async ({ page }) =>{

   const login = new LoginPage(page);

  const inventory = new inventoryPage(page);




/// Login
await login.goto();

await login.login( testData.username , testData.password);

//Add Product
await inventory.addProductToCart();
await inventory.addBoltTshirt();
await inventory.addReadTshirt();


//Verify cart badge

//await expect(
 //page.locator('text=Remove')).toBeVisible();});

await expect(
    page.locator('.shopping_cart_badge')).toHaveText('3');

    console.log('Product Add Successfully');
  });





/// Remove test case

test('Remove Product From Cart', async({page}) =>{

   const login = new LoginPage(page);

  const inventory = new inventoryPage(page);

await login.goto();

await login.login(testData.username , testData.password);

await inventory.addProductToCart();

await inventory.removeProduct();

await expect(
 page.locator('text=Add to cart').first()
).toBeVisible();


console.log('Product removed successfully');

});






test('Open Cart', async({page}) =>{

 const login = new LoginPage(page);
const inventory = new inventoryPage(page);

await login.goto();
await login.login(testData.username , testData.password);

await inventory.addProductToCart();
await inventory.openCart();

await expect(page.locator('.title')).toHaveText('Your Cart');

console.log('Open cart verify sucessfully');






})