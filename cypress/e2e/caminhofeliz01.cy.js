/// <reference types = "cypress"/>

describe("Verificar se o sistema de login de uma aplicação web funciona corretamente.", () => {

    it("Completa o formulario com os dados corretos", () => {

    cy.visit("http://127.0.0.1:3000/frontend_2/index.html")

    cy.get("#email").type("user@example.com").should("have.value", "user@example.com");
    cy.get("#senha").type("password123").should("have.value", "password123")
    cy.get("#btn").click()
    });
})

