/// <reference types="Cypress"/>

Cypress.Commands.add('login_teste',(user,pasword)=>{
    cy.visit("https://www.saucedemo.com")
    cy.get('[data-test="username"]').type(user)
    cy.get('[data-test="password"]').type(pasword)
    cy.get('#login-button').click()
})