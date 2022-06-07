/// <reference types="Cypress" />

it('Deve logar com sucesso', function(){
    cy.visit('/login')
    cy.get('#nickId').type('papitorocks')
    cy.get('#passId').type('pwd123')
    cy.get('button[type="submit"]').click()

    const mensagemEsperada='Em breve você poderá participar de comunidades, adicionar amigos e deixar um Scraps. hahahahah'
    //cy.get('h3[class^="title"]').should('have.text','Olá Papito, bem-vindo ao Orkut')
    //cy.get('p[class="subheader"]').should('have.text',mensagemEsperada)
    cy.get('.title').should('have.text','Olá Papito, bem-vindo ao Orkut')
    cy.get('.subheader').should('have.text',mensagemEsperada)
    
})