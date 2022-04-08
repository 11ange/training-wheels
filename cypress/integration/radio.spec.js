/// <reference types="Cypress" />

it('Deve marcar Hulk', function(){
    cy.visit('https://training-wheels-qaninja.herokuapp.com/radios')
   
    cy.get('input[value="hulk"]')
        .click()
        .should('be.checked')
})