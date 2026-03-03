describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOWQxMWE2OC01NTFjLTQxZjUtYjJlYS0yYTk0OWU4YmRhOTgiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTc3MjQ5OTUwOCwiZXhwIjoxNzcyNzU4NzA4fQ.92ymvUJxFZahqqaUlq2A_jDsCZlvRY2dtf1jXjKOEuA`

    it('Mensagens da API', () => {

        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/09d11a68-551c-41f5-b2ea-2a949e8bda98',
            headers: {
                authorization
            }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })
    })
})