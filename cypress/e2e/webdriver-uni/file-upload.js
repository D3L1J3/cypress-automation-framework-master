/// <reference types="cypress" />

describe("Test file upload via webdriveruni", () => {
    it("Upload a file...", () => {
        cy.visit("/");
        cy.get("#file-upload").invoke('removeAttr', 'target').click({force: true});
        cy.get("#myFile").selectFile('cypress/fixtures/laptop.png');
        cy.get("#submit-button").click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal("Your file has now been uploaded!")
        })
    });

    it('Validate no file attached', () => {
        cy.visit("/");
        cy.get("#file-upload").invoke('removeAttr', 'target').click({force: true});
        cy.get("#submit-button").click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal("You need to select a file to upload!")
        })
    });
})

