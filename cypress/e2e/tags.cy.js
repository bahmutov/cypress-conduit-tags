// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

// figure out how the tags get to the web application
// and confirm the Tags show every returned tag item
// (nothing is missing, and there are no extras)
it('shows the tags returned by the server', () => {
  cy.visit('/')
})
