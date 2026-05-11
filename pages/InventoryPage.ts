import { Page } from "@playwright/test";

export class inventoryPage{

    constructor(private page : Page){}


async addProductToCart(){

    await this.page.click('text=Add to cart');

}

async addBoltTshirt(){

  await this.page.click(
   '#add-to-cart-sauce-labs-bolt-t-shirt');

}

async addReadTshirt(){
    await this.page.click('[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
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

}