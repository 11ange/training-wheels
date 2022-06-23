/// <reference types="Cypress" />
//instalar plugin:
//yarn add cypress-real-events -D
it('Mouseover', function(){
    cy.visit('/hovers')

    const tecnologias = [
        {img:'img[src*=python]', tag:'.tag-python', ling:'Python'},
        {img:'img[src*=golang]', tag:'.tag-golang', ling:'Golang'},
        {img:'img[src*=nodejs]', tag:'.tag-nodejs', ling:'Node.js'},
        {img:'img[src*=netcore]', tag:'.tag-netcore', ling:'.NETCore'}
    ]
    tecnologias.forEach(function(tecnologias){
        cy.get(tecnologias.img)
            .realHover('mouse')
        cy.get(tecnologias.tag)
            .should('be.visible')
            .should('have.text', tecnologias.ling)
    })
    //cy.get('img[src*=nodejs]').trigger('mouseover')
    //cy.get('.tag-nodejs')
    //    .should('be.visible')
    //    .should('have.text', 'Node.js')
    
    
})