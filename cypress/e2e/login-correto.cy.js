describe('Pagina de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve logar com um usuário valido e preencher todos os campos do formulário corretamente', () => {
        cy.get('[data-test="input-loginEmail"]').type('anajesus123@teste.com');
        cy.get('[data-test="input-loginPassword"]').type('Senha123');
        cy.get('[data-test="submit-button"]').click();
    })
})