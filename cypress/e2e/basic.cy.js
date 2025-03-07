/// <reference types = "cypress"/>

describe("Pega elementos básicos", () => {
    it("Verificar se a página se encontra disponível", () => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")

        cy.title().should("be.equal", "Campo de Treinamento")
        cy.title().should("contain", "Treinamento")
    })
    it("Encontrar e clicar no botão", () => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")

        cy.get('#buttonSimple')
        .click()
        .should("value", "Obrigado!")
        
        cy.get
    })
})

describe("Faz cadastro de usuário", () => {
    it("Adiciona nome e sobrenome e cadastra", () => {
        cy.visit("https://www.wcaquino.me/cypress/componentes.html")

        cy.get("#formNome").type('igor')

        cy.get('[data-cy="dataSobrenome"]').type("Alves ")

        cy.get('#formSexoMasc').click().should("be.checked")

    })
})

describe("Preenche todo o formulário", () => {
    it.only("Preenche todos os campos da página", () => {

        cy.visit("https://www.wcaquino.me/cypress/componentes.html")

        cy.get("#formNome").type("Davy")

        cy.get('[data-cy="dataSobrenome"]').type("Santos")

        cy.get('#formSexoMasc').click().should("be.checked")

        cy.get("#formComidaPizza").click().should("be.checked")

        cy.get("textarea").type("Fazer os testes automatizados")

        cy.get("#formEscolaridade").select("2graucomp")

        cy.get("#formEsportes").select("futebol")

        cy.get("#formCadastrar").click()
    })
})