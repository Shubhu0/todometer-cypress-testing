/// <reference types="Cypress" />

context('Todos', () => {
    it('Adds todos', ()=> {
        cy.visit(Cypress.env('baseUrl'));
        cy.clearLocalStorage();
        
        cy.getByTestId("todo").should('have.length', 0);
    })
})