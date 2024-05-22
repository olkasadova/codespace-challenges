describe('user button Rock click', () => {
  it('visit the RPS page', () => {
    cy.visit('http://127.0.0.1:8080/')

    cy.get('[id="paper"]').click()
    cy.get ('[id="user-option"]').as ('userOption').should ('contain', 'Paper')

    cy.get ('[id="computer-option"]'). as ('computerOption')

    cy.get ("@computerOption").then ((option)=> {
      if (option.text().includes("Rock")){
        cy.get ('[id="result"]').contains("It is a tie")
      }
      else if (option.text().includes ("Paper")){
        cy.get('[id="result"]').contains ("You loose :(")
      }
      else {
        cy.get ('[id="result"]').contains ("You won!")
      }
    })


    if ('userOption' == 'computerOption'){
      cy.get ('[id="result"]').should ('contain', 'It is a tie')
    }

    if ('computerOption' == 'Scissors'){
      cy.get ('[id="result"]').should ('contain', 'You loose :(')
    }
    if ('computerOption' == 'Rock') {
      cy.get ('[id="result"]').should ('contain', 'You won!')
    }
    
  })
})