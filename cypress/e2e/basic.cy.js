///  <reference types="cypress" />

describe("testa componente de login", () => {
    it("login realizado com sucesso", () => {
        cy.visit("http://127.0.0.1:3000/frontend/index.html")
    
        cy.get("#email").type("teste@teste.com").should("have.value", "teste@teste.com");
        cy.get("#senha").type("123456").should("have.value", "123456");
        
        cy.get("#Login").click()
    })
})