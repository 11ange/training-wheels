/// <reference types="Cypress" />

it('Mensagens de popup', function(){
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Alerta').click()
    cy.on('window:alert', function(result){
        //console.log(result)
        expect(result).to.equal('Isto é uma mensagem de alerta')
    })
})