import { test , expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { testData } from '../utils/testData';



/// use of beforeEach hook

let inventory : InventoryPage;

let cart : CartPage;

test.beforeEach(async ({page}) =>{

    const login = new LoginPage(page);

    inventory = new InventoryPage(page);

    cart  = new CartPage(page);

    await login.goto();

    await login.login(testData.username , testData.password);
});











test('Complet Checkout flow', async({page}) =>{

//add product

await inventory.addProductToCart(   'sauce-labs-bolt-t-shirt'
);


//Open cart
 await inventory.openCart();

// await page.click('#checkout');

// await expect(
//  page.locator('#continue')
// ).toBeEnabled();



//CheckOut 
await cart.checkout('Mahesh', 'Kumar', '221401');


//Verify Success Message
const Message = await cart.getSuccessMessage();

console.log(Message);

await expect(Message).toContain('Thank you');



})