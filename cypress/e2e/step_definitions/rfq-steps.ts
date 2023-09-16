import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import {TradelingRFQ} from "../../page-object/tradeling-page";


// eslint-disable-next-line @typescript-eslint/typedef
const createRfqFormPageObject = new TradelingRFQ();
Given(/^I Navigate to Tradeling URL$/, function () {
    createRfqFormPageObject.navigateToURL();
    });

When(/^search for product name "([^"]*)"$/, function (ProductName) {
        createRfqFormPageObject.SearchForProductName(ProductName);
    });
When(/^select product from the list$/, function () {
        createRfqFormPageObject.SelectProduct();
    });
When(/^fill the Qty "([^"]*)"$/, function (Qty) {
        createRfqFormPageObject.EnterQty(Qty);
    });
When(/^Select rfq expiry date$/, function () {
        createRfqFormPageObject.SelectExpiryDate();
    });
When(/^select shipping destination$/, function () {
        createRfqFormPageObject.SelectShippingDestination();
    });
When(/^select shipping city$/, function () {
        createRfqFormPageObject.SelectShippingCity();
    });
Then(/^click continue$/, function () {
        createRfqFormPageObject.ClickContinue();
    });
When(/^Fill all the required fields for RFQ$/, function (datatable: any) {
        const table = datatable.hashes();
        table.forEach((row) => {
            createRfqFormPageObject.EnterAllData(
                row.FirstName,
                row.LastName,
                row.CompanyName,
            );
        });
    });
When(/^Enter Mobile "([^"]*)" number$/, function (Mobnumber) {
        createRfqFormPageObject.EnterMobileNumber(Mobnumber);
    });
When(/^Select Country of Operation$/, function () {
        createRfqFormPageObject.SelectOperationCountry();
    });
When(/^The user enters new email address "([^"]*)"$/, function (newEmailAddress) {
        createRfqFormPageObject.theUserEntersAddsNewEmailAddress(newEmailAddress);
    });
Then(/^Click on Continue button$/, function () {
        createRfqFormPageObject.ClickOnDetailsContinue();
    });
Then(/^verify otp screen is opened$/, function () {
        createRfqFormPageObject.validateRFQFormSubmissionSuccess();
        });

























