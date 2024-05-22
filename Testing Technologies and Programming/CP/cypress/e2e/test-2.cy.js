describe('template spec', () => {
    it('new test', () => {
      cy.visit('https://example.cypress.io/commands/actions')

      cy.get ('input [type="email"]').as ('emailInput')

      const emailAddress = 'example@gmail.com'
      cy.get ('@emailInput').type (emailAddress)
  
      //assert th content
      cy.get('@emailInput').should ('have.value', emailAddress)
    
    })
  })