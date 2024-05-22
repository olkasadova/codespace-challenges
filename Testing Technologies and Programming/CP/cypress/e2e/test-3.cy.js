describe('template spec', () => {
    it('new test', () => {
        cy.visit('https://example.cypress.io/commands/actions')

        cy.get('.action-btn').click()
        cy.get('#action-canvas').click('topLeft')
        cy.get('#action-canvas').click('bottomRight')
        cy.get('#action-canvas').click(150, 185)
      
    })
  })