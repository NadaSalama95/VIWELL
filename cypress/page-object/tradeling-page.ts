
import 'cypress-file-upload';

// eslint-disable-next-line @typescript-eslint/typedef
const rfqLocators = {
    productName: '#combobox-1-input',
    productSelection: 'div :nth-child(3) > li',
    productQty: '#quantity',
    expiryDate: '[placeholder="RFQ expiry date"]',
    nextMonthIcon: '[aria-label="next"]',
    shippingDestination:'[data-testid="rfq-shipping-destination"] > .css-6h0eu2-container',
    shippingCity: '[data-testid="rfq-city"] > div > div',
    shippingCitySelection: '#react-select-rfq-city-option-1',
    continueRfqDetailsBtn: '.css-zmni0v > .chakra-button',
    firstName: '#firstName',
    lastName: '#lastName',
    companyName: '#companyName',
    mobileNumber: '#phoneNumber',
    operationCountry: '[data-testid="rfq-operation-destination"]',
    operationCountrySelection: '#react-select-countryOfOperation-option-4',
    email: '#email',
    continueDetailsBtn: '.css-gnoofw > .chakra-button',
    otpIsDisplayedSuccessfully: 'chakra-button css-zyjebe',









    



    
    unit: '#unit > .block',
    unitSelection: 'ul[aria-labelledby="unit"]',
    unitErrorMessage: '[data-testid="rfq-quantity"] > div',
    createRfqBtn: 'button:contains("Create RFQ")',
    productCategory: '#category\\.categoryId',
    unitTargetPrice: '#targetedPrice',
    leafCategorisSearch: '[data-testid="category-search-input"]',
    categoriesSearchResult: 'span[class="css-1hmf29m"]',
    confirmSelectionBTN: '[data-testid="confirm-category-selection-button"]',
    shippingSelection: '#react-select-location-option-1',
    agreeCheckbox: 'span[class="chakra-checkbox__control css-1ydjfm6"]',
    createNewRfqPageTitle: '[data-testid="create-rfq-title"]',
    
};

export class TradelingRFQ {
    navigateToURL()
    {
        cy.visit("https://www.tradeling.com/ae-en/rfq/create-rfq ")
    }
    SearchForProductName(ProductName) {
        cy.get(rfqLocators.productName).type(ProductName);
    }
    SelectProduct() {
        cy.get(rfqLocators.productSelection).click();
    }
    EnterQty(Qty) {
        cy.get(rfqLocators.productQty).type(Qty);
    }
    SelectShippingDestination() {
        cy.get(rfqLocators.shippingDestination).click();
        cy.get(rfqLocators.shippingSelection).click();
    }
    SelectShippingCity() {
        cy.get(rfqLocators.shippingCity).click();
        cy.get(rfqLocators.shippingCitySelection).click();
    }
    SelectExpiryDate() {
        cy.get(rfqLocators.expiryDate).click();
        cy.get(rfqLocators.nextMonthIcon).click();
        cy.contains('24').click();
    }
    ClickContinue() {
        cy.get(rfqLocators.continueRfqDetailsBtn).click();
    }
    EnterAllData(FirstName: string, LastName: string, CompanyName: string) {
        this.inputFirstName().type(FirstName);
        this.inputLastName().type(LastName);
        this.inputCompanyName().type(CompanyName);
    }
   
    inputFirstName() {
        return cy.get(rfqLocators.firstName);
    }

    inputLastName() {
        return cy.get(rfqLocators.lastName);
    }

    inputCompanyName() {
        return cy.get(rfqLocators.companyName);
    }
    EnterMobileNumber(MobNo) {
        cy.get(rfqLocators.mobileNumber).type(MobNo);
    }
    SelectOperationCountry() {
        cy.get(rfqLocators.operationCountry).click();
        cy.get(rfqLocators.operationCountrySelection).click();
    }
    theUserEntersAddsNewEmailAddress(newEmail) {
        cy.get(rfqLocators.email).type(newEmail);
    }
    ClickOnDetailsContinue() {
        cy.get(rfqLocators.continueDetailsBtn).click();
    }
    validateRFQFormSubmissionSuccess(){
        cy.window().get(rfqLocators.otpIsDisplayedSuccessfully).should('be.visible');
    }
 
}
