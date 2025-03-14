/// <reference types = "cypress"/>

describe("Verificar se o sistema de login de uma aplicação web funciona corretamente.", () => {

    it("Completa o formulario com os dados incorretos", () => {

    cy.visit("http://127.0.0.1:3000/frontend_2/index.html")

    cy.get("#email").type("userexample@gmail.com").should("have.value", "userexample@gmail.com");
    cy.get("#senha").type("093213").should("have.value", "093213")
    cy.get("#btn").click()

    cy.get("#error-message").should("have.text", "Credenciais inválidas!")
    });
})