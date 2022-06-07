it('Selecionar uma data', function () {
    cy.visit('datepicker')

    const date = {
        month: 'out',
        year: '1973',
        day: '5'
    }

    cy.get('.datetimepicker-dummy-input').click()
    cy.get('.datepicker-nav-month').click()

    cy.contains('.datepicker-month', date.month).click()
    cy.get('.datepicker-nav-year').click()

    cy.contains('.datepicker-year span', date.year).click()

    cy.contains('button[class=date-item]', new RegExp('^' + date.day + '$', 'g')).click()
})