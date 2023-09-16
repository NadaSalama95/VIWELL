
Feature: As a user i should be able to submit RFQ form

  Scenario: submit RFQ As guest
    Given I Navigate to Tradeling URL
    When search for product name "Iphone"
    When select product from the list
    When fill the Qty "3"
    When Select rfq expiry date
    When select shipping destination
    When select shipping city
    Then click continue
    When Fill all the required fields for RFQ
      | FirstName  | LastName    | CompanyName |
      | Nada Test   | Test User    | rfq company  |
    When Enter Mobile "509047999" number 
    When Select Country of Operation
    When The user enters new email address "nadaSalama@tradeling.com"
    Then Click on Continue button
    Then verify otp screen is opened
