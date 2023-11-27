/// <reference types="Cypress"/>

describe('Teste E2E - Realizando a compra de produtos com sucesso', () => {
    it('Fluxo da comrpra de produtos', () => {
        cy.login_teste('standard_user','secret_sauce')
        cy.get('.title').should('contain','Products')

        // Ordenação de produtos do menor ao maior malor
        cy.get('[data-test="product_sort_container"]').select('Price (low to high)')
        
        // Validação da ordenação desses produtos
        cy.get('#item_2_title_link > .inventory_item_name').should('contain', 'Sauce Labs Onesie')
        cy.get('#item_0_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bike Light')
        cy.get('#item_1_title_link > .inventory_item_name').should('contain', 'Sauce Labs Bolt T-Shirt')

        // Adicionando produtos ao carrinho
        cy.contains('Sauce Labs Onesie').click()
        cy.get('.btn_primary').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
        cy.get('[data-test="back-to-products"]').click()

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click()
        cy.get('[data-test="back-to-products"]').click()

        //Checagem da quantidade de produtos adicionados ao carrinho
        cy.get('.shopping_cart_link').should('have.text','3')
        
        //Check no carrinho
        cy.get('.shopping_cart_link').click()
        cy.verifica_produtos()

        //Checkout
        cy.get('[data-test="checkout"]').click()
        cy.get('[data-test="firstName"]').type('Teste Primeiro Nome')
        cy.get('[data-test="lastName"]').type('Teste Sobrenome')
        cy.get('[data-test="postalCode"]').type('00000000')
        cy.get('[data-test="continue"]').click()

        //Verificando produtos do checkout
        cy.verifica_produtos()

        //Checagem do valor total
        cy.get('.summary_total_label').should('have.text','Total: $36.69')

        //Finalizando compra
        cy.get('[data-test="finish"]').click()
        cy.get('.complete-header').should('have.text','Thank you for your order!')

        
    });
});