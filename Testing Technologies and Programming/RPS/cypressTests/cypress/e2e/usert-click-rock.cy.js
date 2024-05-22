describe('user button Rock click', () => {
  it('visit the RPS page', () => {
    cy.visit('http://127.0.0.1:8080/')

    cy.get('[id="rock"]').click()
    cy.get ('[id="user-option"]').as ('userOption'). should ('contain', 'Rock')

    cy.get ('[id="computer-option"]'). as ('computerOption')

    if ('userOption' == 'computerOption'){
      cy.get ('[id="result"]').should ('contain', 'It is a tie')
    }

    if ('computerOption' == 'Scissors'){
      cy.get ('[id="result"]').should ('contain', 'You won!')
    }
    if ('computerOption' == 'Paper') {
      cy.get ('[id="result"]').should ('contain', 'You loose :(')
    }
  })
})