it('Deve exibir uma mensagem toast', function(){
    cy.visit('/toaster')
    cy.contains('button', 'Toast Rápido').click()
    //cy.get('body')
    //cy.wait(3000)
    cy.get('.notification')
        .should('be.visible')
        .should('have.text','Essa notificação é muito rápida!')
})