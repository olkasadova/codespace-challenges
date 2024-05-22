describe('template spec', () => {
  it('new test', () => {
    cy.visit('https://example.cypress.io')

    cy.get ('.home-list').contains ('Querying')

    cy.get ('.home-list').contains ('Querying').click()

    cy.url().should ('include', 'commands/querying')
    cy.get('h1').should ('contain', 'Querying')

    expect (true).to.equal (true)
  })
})