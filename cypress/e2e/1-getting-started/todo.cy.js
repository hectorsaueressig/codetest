/// <reference types="cypress" />

describe('Go to', () => {
  beforeEach(() => {
    cy.visit('https://demoqa.com/text-box')
  })

  it('Fill form', () => {
    cy.get('userName').type('John Doe')
    cy.get('userEmail').type('john.doe@example.com')
    cy.get('userName').type('currentAddress')
    cy.get('userName').type('456 Secondary St')
  })

  context('with a checked task', () => {
    beforeEach(() => {
      // We'll take the command we used above to check off an element
      // Since we want to perform multiple tests that start with checking
      // one element, we put it in the beforeEach hook
      // so that it runs at the start of every test.
      cy.contains('Pay electric bill')
        .parent()
        .find('input[type=checkbox]')
        .check()
    })
  })
})
