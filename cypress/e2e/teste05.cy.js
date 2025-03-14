/// <reference types = "cypress"/>

describe("Verificar se os links do menu de navegação redirecionam para as páginas corretas.", () => {

    it("verificar se a url do site muda a cada clique", () => {

    cy.visit("http://127.0.0.1:3000/frontend_2/index3.html")

    cy.get("#home").click()
    cy.url().should('include', '/home')

    cy.visit("http://127.0.0.1:3000/frontend_2/index3.html")

    cy.get("#about").click()
    cy.url().should('include', '/about')

    cy.visit("http://127.0.0.1:3000/frontend_2/index3.html")

    cy.get("#services").click()
    cy.url().should('include', '/services')

    cy.visit("http://127.0.0.1:3000/frontend_2/index3.html")

    cy.get("#contact").click()
    cy.url().should('include', '/contact')
 })
})