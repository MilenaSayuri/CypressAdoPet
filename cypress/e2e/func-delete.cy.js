describe('Funcionalidade Delete', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo');
    })
    it('Deve deletar todas as tarefas da lista', () => {
        cy.get('.todo-list li') //Pega todos os <li> da lista.
            .each(($li) => { //Itera sobre cada item encontrado.
                cy.wrap($li) //Transforma aquele elemento jQuery em um elemento Cypress novamente.
                    .find('button.destroy') //Busca o botão de deletar dentro daquele item.
                    .click({ //Clica mesmo que esteja invisível.
                        force: true
                    })
            })
    })

})