import { Before, Given, When, Then } from "cypress-cucumber-preprocessor/steps"

Given('I access the WebdriverUniversity Login Portal page', () => {
    cy.visit("https://webdriveruniversity.com/Login-Portal/index.html")
})

When('I enter a username {word}', (userName) => {
    cy.get("#text").type(userName);
})

