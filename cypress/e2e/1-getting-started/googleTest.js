/// <reference types="cypress" />

describe('Google Homepage', () => {
    beforeEach(() => {
      cy.visit('https://google.com')
    })
  
    /* it('has the correct title', () => { // radi
      cy.title().should('include', 'Google')
    })
  
    it('has a search bar', () => { // radi 
      cy.get('input[name="q"]')
    }) 
  
    it('can search for a term', () => { // radi, izmeni id za prihvatanje uslova
      cy.get('#L2AGLb > .QS5gu').click()
      cy.get('input[name="q"]').type('Cypress.io{enter}')
      cy.url().should('include', 'search?q=Cypress.io')
    }) */
  
    it('can click on the Images link', () => {
      cy.get('#L2AGLb > .QS5gu').click() // 
      cy.get('a[data-pid="2"]').click()
      cy.get('#QS5gu > .sy4vM').click()
      cy.url().should('include', 'imghp?hl=sv&ogbl')
    })
  
    /* it('can click on the Sign in button', () => {
      cy.get('#L2AGLb > .QS5gu').click()
      cy.get('a[href="https://accounts.google.com/v3/signin/*"]').click()
      cy.url().should('include', 'accounts.google.com')
    }) */
  })
  