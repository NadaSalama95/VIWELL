Feature: As a user i should be able to login and add an item to my cart
  Background:
    Given I Navigate to Amazon homePage URL

  Scenario: Check that user is logged in successfully
    Given I click on SignIn
    When Entered a valid credentials "01065198855" and "Nada_0099" and complete SignIn
    Then I should be loggedIn successfully and redirected to the home page

  Scenario: Verify Product Add To Cart
    Given I search for a "nescafe" product
    When Click on the product to view the details
    When I added the product to the cart
    When I Navigate to the shopping cart page
    Then I should see the product is successfully added to the cart.



