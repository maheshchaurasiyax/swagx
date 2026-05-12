import { Page } from "@playwright/test";

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






async logout(){

    await this.page.click('#react-burger-menu-btn');
    await this.page.click('#logout_sidebar_link');
    
}

async sortLowToHight(){

    await this.page.selectOption('.select_container select', 'lohi');
}


async removeProductMultiple(productName : string){

    await this.page.click(`[data-test="remove-${productName}"]`);
}







}