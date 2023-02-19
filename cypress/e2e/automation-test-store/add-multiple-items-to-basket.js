import AutoStore_Homepage_PO from "../../support/pageObjects/automation-test-store/AutoStore_Homepage_PO";
/// <reference types="cypress" />
/// <reference types="cypress-xpath" />

describe("Add multiple items to basket", () => {
    const autoStore_HomePage_PO = new AutoStore_Homepage_PO();
    before(() => {
        cy.fixture("products.json").then(function (data) {
            globalThis.data = data;
        });
    });

    beforeEach(() => {
        autoStore_HomePage_PO.accessHomepage();
        autoStore_HomePage_PO.clickOn_HairCare_Link();
    });

    it("Add specific items to basket", () => {
        globalThis.data.productName.forEach(function(element) {
            cy.addProductToBasket(element);
        })  
        cy.get('.dropdown-toggle > .fa').click();
        cy.get('.product-list tbody tr:not(:first-child)').should('have.length', 3); // tr:not is excluding the table header in this case
    });
})