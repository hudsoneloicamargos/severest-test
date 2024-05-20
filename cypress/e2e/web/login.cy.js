/// <reference types="cypress" />

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        //Fazer algo antes de cada cenário
        cy.visit('login')
    });

    after(() => {
        //Fazer algo depois de todos os testes
        // Desligar servidor: npm quit
    });

    afterEach(() => {
        //Fazer algo depois de CADA cenário
        //Tirar print a cada cenário cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
        cy.get('[data-testid="email"]').clear().type("fabio@araujo.com")
        cy.get('[data-testid="senha"]').clear().type('teste@123')
        cy.get('[data-testid="entrar"]').click()
        cy.get('h1').should('contain', 'Bem Vindo')
        cy.get('.lead').should('contain', 'Este é seu sistema para administrar seu ecommerce.')
    });

    it('Deve validar mensagem de usuário inválido', () => {
        cy.get('[data-testid="email"]').clear().type("fabio0123@araujo.com")
        cy.get('[data-testid="senha"]').clear().type('teste@123')
        cy.get('[data-testid="entrar"]').click()
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')
    });

})