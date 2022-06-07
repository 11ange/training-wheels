/// <reference types="Cypress" />

it('Deve marcar Hulk', function(){
    cy.visit('/radios')
   
    cy.get('input[value="hulk"]')
        .click()
        .should('be.checked')
})