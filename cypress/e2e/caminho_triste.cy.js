describe("verifica se o formulario está correto", () => {
    it("Completa o formulario com os dados corretos", () => {

    cy.visit("http://127.0.0.1:3000/frontend/index.html")

    cy.get("#email").type("davy.nicacio@aluno.senai.br")
    cy.get("#senha").type("1234567")
    cy.get("#btn").click()
    });
})

