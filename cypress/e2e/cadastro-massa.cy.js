import {
    usuarios
} from '../fixtures/usuarios.json';

describe('Pagina de Cadastro', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click();
    })

    usuarios.forEach(user => {
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuario', () => {
            cy.get('[data-test="input-name"]').clear().type(user.name);
            cy.get('[data-test="input-email"]').clear().type(user.email);
            cy.get('[data-test="input-password"]').clear().type(user.password);
            cy.get('[data-test="input-confirm-password"]').clear().type(user.password);
            cy.get('[data-test="submit-button"]').click();
        })
    })
})