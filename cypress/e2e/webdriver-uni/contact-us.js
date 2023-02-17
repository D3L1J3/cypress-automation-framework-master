/// <reference types="cypress" />

describe("Test Contact Us form via WebdriverUni", () => {
    before(() => {
        cy.fixture("example").then(function(data) {
            // this.data = data; // if this does not work use "globalThis.data = data"
            globalThis.data = data;
        })
    });

    beforeEach(() => {
        cy.visit(Cypress.env("webdriveruni_homepage") + "/Contact-Us/contactus.html");
        // cy.visit("http://webdriveruniversity.com/");
        // cy.get("#contact-us").invoke('removeAttr', 'target').click({force:true});
    });
    
    it("Should be able to submit a successful submission via contact us form", () => {
        cy.document().should('have.property', 'charset').and('eq', 'UTF-8');
        cy.title().should('include', 'WebDriver | Contact Us');
        cy.url().should('include', 'contactus');
        // Code below replaced by custom commands
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('[name="email"]').type(data.email);
        // cy.get('textarea.feedback-input').type("How can I learn cypress");
        // cy.get('[type="submit"]').click();
        // cy.get('h1').should('have.text', 'Thank You for your Message!');

        cy.webdriverUni_ContactForm_Submission(Cypress.env("first_name"), data.last_name, data.email, "How can I learn cypress", 'h1', 'Thank You for your Message!');
    });

    it("Should not be able to submit a successful submission via contact us form as all fields are required", () => {        
        // Code below replaced by custom commands
        // cy.get('[name="first_name"]').type(data.first_name);
        // cy.get('[name="last_name"]').type(data.last_name);
        // cy.get('textarea.feedback-input').type("How can I learn cypress");
        // cy.get('[type="submit"]').click();    
        // cy.get('body').contains('Error: all fields are required');
        // cy.get('body').contains('Error: Invalid email address');
        cy.webdriverUni_ContactForm_Submission(data.first_name, data.last_name, " ", "How can I learn cypress", 'body', 'Error: Invalid email address');

    });
})

