/// <reference types="Cypress" />

it('Seleção dos checkbox', function(){
    cy.visit('https://training-wheels-qaninja.herokuapp.com/checkboxes')
   
    const filmes = [
        'cap3',
        'avengers4',
        'ironman',
        'blackpanther',
        'strange'
    ]

    filmes.forEach(function(m){
        cy.get(`input[name=${m}]`)
            .click()
            .should('be.checked')
    })
})