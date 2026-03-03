describe('Pagina de Cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="register-button"]').click();
  })
  it('Deve cadastrar um novo usuário com sucesso preenchendo todos os campos do formulário corretamente', () => {
    cy.register('Ana de Jesus', 'anajesus123@teste.com', 'Senha123', 'Senha123');
  })
})