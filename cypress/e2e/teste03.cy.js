/// <reference types = "cypress"/>

describe("Validar o funcionamento de um formulário de contato.", () => {

    it("Completa o formulario com os dados corretos", () => {

    cy.visit("http://127.0.0.1:3000/frontend_2/index2.html")

    cy.get("#name").type("Davy dos Santos").should("have.value", "Davy dos Santos");
    cy.get("#email").type("user@example.com").should("have.value", "user@example.com")
    cy.get("#messagem").type("junior programmer").should("have.value", "junior programmer")
    cy.get("#btn").click()

    cy.get("#success-message").should("have.text", "Mensagem enviada com sucesso!")
    });
})