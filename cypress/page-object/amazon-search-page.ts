import 'cypress-wait-until';

const locators: Record<string, string> = {
  searchBar:'#twotabsearchtextbox',
  searchIcon:'#nav-search-submit-button',
  searchResult:'.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > h2 > a > span',
  addToCart:'#add-to-cart-button',
  addedToCartMessage:'div.a-section.a-padding-medium.sw-atc-message-section',
    shoppingCart:'#nav-cart-count',
  productInCart:'span.a-size-base-plus.a-color-base.sc-product-title.sc-grid-item-product-title'
}

export class amazonSearchPage {

    searchOnProduct(product){
        cy.get(locators.searchBar).click();
        cy.get(locators.searchBar).type(product);
        cy.get(locators.searchIcon).click();
    }
    goToProductDetails(){
        cy.get(locators.searchResult).first().click();
    }
    addToCart(){
        cy.get(locators.addToCart).click();
    }
    navigateToShoppingCart(){
        cy.get(locators.shoppingCart).click();
    }
    verifyProductAdded(){
        cy.get(locators.productInCart).should('contain.text',"Nescafe");
    }

}