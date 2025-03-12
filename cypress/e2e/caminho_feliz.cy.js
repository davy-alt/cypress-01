/// <reference types = "cypress"/>

    describe("verifica se o login funciona", () => {
        it.only("verifica se os campos estão corretos", () => {

        cy.visit("http://127.0.0.1:3000/frontend/index.html")

        cy.get("#email").type("davy.nicacio@aluno.sesi.al")
        cy.get("#senha").type("1234")
        cy.get("#btn").click()
        })
    })