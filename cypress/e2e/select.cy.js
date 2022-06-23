/// <reference types="Cypress" />

before(function () {
    cy.visit('select')
})
it('Selecionar Bucky por id', function () {

    cy.get('#avengerList')
        .select('Bucky')
        .should('have.value', '2')
})

it('Selecionar Tony Stark sem ser por id', function () {
    cy.contains('option', 'Selecione um personagem')
        .parent()
        .select('Tony Stark')
        .should('have.value', '3')
})