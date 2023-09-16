import {Given, Then,When} from '@badeball/cypress-cucumber-preprocessor';
import {amazonLoginPage} from "../page-object/amazon-login-page";

const amazonLogin = new amazonLoginPage();
Given(/^I Navigate to Amazon homePage URL$/, function () {
    amazonLogin.navigateToAmazon();
});
Given(/^I click on SignIn$/, function () {
    amazonLogin.clickOnSignIn();
});

When(/^Entered a valid credentials "([^"]*)" and "([^"]*)" and complete SignIn$/, function (username , password) {
    amazonLogin.enterValidCredentials(username,password);
});
Then(/^I should be loggedIn successfully and redirected to the home page$/, function () {
    amazonLogin.verifyUserLoggedIn();
});

