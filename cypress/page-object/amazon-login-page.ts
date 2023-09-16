import 'cypress-wait-until';

const locators: Record<string, string> = {
    signInButton:'#nav-link-accountList-nav-line-1',
    emailField:'#ap_email',
    continueButton:'.a-button-inner > #continue',
    passwordField:'#ap_password',
    signIn:'#signInSubmit',
    homePageAccount:'#nav-link-accountList',
}

export class amazonLoginPage {

    navigateToAmazon(){
        cy.visit('https://www.amazon.eg/-/en/');
    }

    clickOnSignIn(){
        cy.get(locators.signInButton).click();
    }

    enterValidCredentials(username, password){
        cy.get(locators.emailField).type(username);
        cy.get(locators.continueButton).click({ force : true } );
        cy.get(locators.passwordField).type(password);
        cy.get(locators.signIn).click();
    }

    verifyUserLoggedIn(){
        cy.get(locators.homePageAccount).should('be.visible');
    }


}