/// <reference types="Cypress"/>

Cypress.Commands.add('verifica_produtos',()=>{
    cy.get('#item_2_title_link > .inventory_item_name').should('contain', 'Sauce Labs Onesie')
        cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
        cy.get('#item_1_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt')
})