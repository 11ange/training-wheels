/// <reference types="Cypress" />

it('Deve fazer o upload da foto', function(){
    cy.visit('/upload')
    const imageFile = 'cypress/fixtures/imagem.jpg'
    cy.get('input[name=file]').selectFile(imageFile, {force: true})
    cy.get('input[value=Upload]').click()
    cy.get('img[src="/uploads/imagem.jpg"]', {timeout:7000})
        .should('be.visible') 
})