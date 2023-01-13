import 'cypress-data-session'

beforeEach(() => {
  const username = `cy-${Cypress._.random(1e6)}`
  const email = username + '@acme.co'
  const password = `!secret-${Cypress._.random(1e6)}`
  cy.visit('/')
  cy.contains('a', 'Sign up').click()
  cy.location('pathname').should('equal', '/register')

  cy.get('input[placeholder=Username]').type(username)
  cy.get('input[placeholder=Email]').type(email)
  cy.get('input[placeholder=Password]').type(password)
  cy.contains('button', 'Sign up').click()
  cy.location('pathname').should('equal', '/')
  // we should be logged in
  cy.contains('a.nav-link', username).should('be.visible')
})

it('is logged in', () => {})
