/// <reference types="Cypress" />

it('Mensagens de popup', function () {
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Alerta').click()
    cy.on('window:alert', function (result) {
        //console.log(result)
        expect(result).to.equal('Isto é uma mensagem de alerta')
    })
})

it('Deve confirmar a solicitação', function () {
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Confirma').click()
    cy.on('window:confirm', () => true)

    cy.get('#result').should('have.text', 'Mensagem confirmada')
})

it('Deve cancelar a solicitação', function () {
    cy.visit('/javascript_alerts')

    cy.contains('button', 'Confirma').click()
    cy.on('window:confirm', () => false)

    cy.get('#result').should('have.text', 'Mensagem não confirmada')
})

it('Deve exibir mensagem de boas vindas com meu nome', function () {
    cy.visit('/javascript_alerts')

    cy.window().then(function($win){
        cy.stub($win,'prompt').returns('Luis')
        cy.contains('button', 'Prompt').click()
    })
    

    cy.get('#result').should('have.text', 'Olá, Luis')
})