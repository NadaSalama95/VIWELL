import {Given, Then, When} from '@badeball/cypress-cucumber-preprocessor';
import {amazonSearchPage} from "../../page-object/amazon-search-page";
const amazonSearch = new amazonSearchPage();

When (/^Click on the product to view the details$/, function () {
amazonSearch.goToProductDetails();
});
When (/^I added the product to the cart$/, function () {
amazonSearch.addToCart();
});
When(/^I Navigate to the shopping cart page$/, function () {
amazonSearch.navigateToShoppingCart();
});
Then(/^I should see the product is successfully added to the cart\.$/, function () {
amazonSearch.verifyProductAdded();
});
Given(/^I search for a "([^"]*)" product$/, function (product) {
amazonSearch.searchOnProduct(product);
});