/// <reference types="Cypress" />

const niceIframe = function(){
    return cy
        .get('#weareqaninja')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

const badIframe = function(){
    return cy
        .get('iframe[src*=instagram]')
        .its('0.contentDocument.body').should('not.be.empty')
        .then(cy.wrap)
}

it('Teste de iframes bons', function(){
    cy.visit('/nice_iframe')

    niceIframe()
        .contains('.FollowerCountText','6,752 followers')
        .should('be.visible')
})

it('Teste de iframes ruins', function(){
    cy.visit('/bad_iframe')

    badIframe()
        .contains('.FollowerCountText','6,752 followers')
        .should('be.visible')
})