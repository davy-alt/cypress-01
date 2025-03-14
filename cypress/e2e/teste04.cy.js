/// <reference types = "cypress"/>

describe("Validar o funcionamento de um formulário de contato.", () => {

    it("Completa o formulario com os algum campo vazio", () => {

    cy.visit("http://127.0.0.1:3000/frontend_2/index2.html")


    cy.get("#email").type("user@example.com").should("have.value", "user@example.com")
    cy.get("#messagem").type("junior programmer").should("have.value", "junior programmer")
    cy.get("#btn").click()
    });
})