/// <reference types="cypress" />
// Inclui as definições de tipo para Cypress, proporcionando autocompletar e outras funcionalidades no editor.

// Descreve um conjunto de testes para a funcionalidade de cadastro de usuários.
describe('Funcionalidade: Cadastro', () => {

    // Executa antes de cada teste individual dentro do bloco 'describe'.
    // Navega para a página de cadastro de usuários.
    beforeEach(() => {
        cy.visit('cadastrarusuarios')
    });
    
    // Caso de teste: verifica se o cadastro é realizado com sucesso.
    it('Deve fazer o cadastro com sucesso', () => {
        // Insere o nome 'Hudson Eloi' no campo de nome.
        cy.get('[data-testid="nome"]').type('Hudson Eloi')
        // Insere o email 'hudson@gmail.com' no campo de email.
        cy.get('[data-testid="email"]').type('hudson@gmail.com')
        // Insere a senha 'hudson@123' no campo de senha.
        cy.get('[data-testid="password"]').type('hudson@123')
        // Marca o checkbox (presumivelmente aceitando termos e condições).
        cy.get('[data-testid="checkbox"]').check()
        // Clica no botão de cadastro para enviar o formulário.
        cy.get('[data-testid="cadastrar"]').click()
    });
});
