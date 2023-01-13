// enables intelligent code completion for Cypress commands
// https://on.cypress.io/intelligent-code-completion
/// <reference types="cypress" />

// import the cypress-map plugin commands

it('confirms the number of likes on each article', () => {
  // intercept the articles returned by the server
  cy.intercept({
    method: 'GET',
    hostname: 'api.realworld.io',
    pathname: '/api/articles',
  })
    // give the intercept an alias
    .as('articles')
  cy.visit('/')
  // wait for the articles to load
  // and get the list of articles from the server's response
  //
  // print the first article using cy.print
  // https://github.com/bahmutov/cypress-map
  //
  // map the list of articles into the list of favorites counts
  // and print it to the Command Log
  //
  // confirm each count is between 1 and 1000
})
