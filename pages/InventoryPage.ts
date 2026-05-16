import { Page, expect } from "@playwright/test";

export class InventoryPage{

    constructor(private page : Page){}


async addProductToCart(productName: string){

    await this.page.click(
        `[data-test="add-to-cart-${productName}"]`
    );

}


async removeProduct(){

    await this.page.click('text=Remove');

}
async openCart(){

    await this.page.click('.shopping_cart_link');

}




async logout() {

   await this.page.click('#react-burger-menu-btn');

   const logoutBtn = this.page.locator(
      '#logout_sidebar_link'
   );

   await logoutBtn.waitFor({
      state: 'visible'
   });

   await this.page.waitForTimeout(500);

   await logoutBtn.click();

}

async sortLowToHight(){

    await this.page.selectOption('.select_container select', 'lohi');
}


async removeProductMultiple(productName : string){

    await this.page.click(`[data-test="remove-${productName}"]`);
}







}