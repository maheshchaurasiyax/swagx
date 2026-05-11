import { test , expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { inventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { testData } from '../utils/testData';



test('Complet Checkout flow', async({page}) =>{

const login = new LoginPage(page);

const inventory = new inventoryPage(page);

const cart = new CartPage(page);



///login

await login.goto();

await login.login(testData.username , testData.password);


//add product

await inventory.addProductToCart();


//Open cart
await inventory.openCart();



//CheckOut 
await cart.checkout('Mahesh', 'Kumar', '221401');


//Verify Success Message
const Message = await cart.getSuccessMessage();

console.log(Message);

await expect(Message).toContain('Thank you');



})