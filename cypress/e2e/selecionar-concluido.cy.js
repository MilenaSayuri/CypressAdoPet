describe('Selecionar tarefas concluidas', () => {
    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo');
        cy.get('.toggle') //pega todos os checkboxes
            .first() //pega só o primeiro  
            .check() //marca o checkbox
    })
    it('Deve filtrar as tarefas concluidas da lista', () => {
        cy.get('.filters > :nth-child(3) > a').click();
    })
})