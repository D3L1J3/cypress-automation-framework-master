/// <reference types="cypress" />

describe("Test Submit form", () => {
    it("Test submit form", () => {
        
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get('input[name="name"]').first().type("John Smith")
        cy.get('input[name="email"]').type("johnsmith@example.com")
        cy.get('input[type="password"]').type("password123")
        cy.get('select[id="exampleFormControlSelect1"]').select("Female")
        cy.get('input[value="option2"]').check()
        cy.get('input[name="bday"]').type("1990-01-01")
        cy.get('input.btn.btn-success').click()
        cy.get('div.alert.alert-success.alert-dismissible').should('be.visible')
    });
})

