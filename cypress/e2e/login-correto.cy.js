describe('Pagina de Login', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve logar com um usuário valido e preencher todos os campos do formulário corretamente', () => {
        cy.login('anajesus123@teste.com', 'Senha123');
    })
})