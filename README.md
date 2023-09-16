
# VIWELL Task

This project is a sample README that provides instructions for setting up Cypress.

## Table of Contents
- [Installation](#installation)
- [Running Cypress](#running-cypress)

## Installation

To get started with this project, you'll need to install the required dependencies. 
1. Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (Node Package Manager) installed.
2. install latest cypress [run: npm install cypress]
3. install TypeScript [Please follow steps in https://docs.cypress.io/guides/tooling/typescript-support ]
4. install cucumber 
## Run Project from Terminal
- Run: `npx cypress open`

## Manual test Cases
Task 1: Login and Validation to Amazon EG
1.	Navigate to Amazon homePage URL
2.	Click on SignIn button
3.	Enter a valid username and password and complete SignIn
4.	Validate that the user is successfully logged in and redirected to the home page.
Expected : 
User is successfully logged in and redirected to the home page.

Task 2:  Verify Product Add To Cart
1. Navigate to Amazon homePage URL
2. Search for a specific product.
3. Click on the product to view its details.
4. Add the product to the shopping cart.
5. Navigate to the shopping cart page.
6. Validate that the product is successfully added to the cart.
Expected :
The product is successfully added to the cart.

Task 3:  As a user i should be able to submit form https://www.tradeling.com/ae-en/rfq/create-rfq to submit.
1. Navigate to Tradeling URL
2. search for product name
3. select product from the list
4. fill the Qty
5. select rfq expiry date
6. select shipping destination
7. select shipping city
8. click continue
9. Fill all the required fields for RFQ
10. Enter Mobile number 
11. Select Country of Operation
12. The user enters new email address
13. Click on Continue button
14. verify otp screen is opened
Expected :
submission is successful, and the user is redirected to correct page.