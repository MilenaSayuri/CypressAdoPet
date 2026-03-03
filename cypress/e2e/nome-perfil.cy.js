describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIwOWQxMWE2OC01NTFjLTQxZjUtYjJlYS0yYTk0OWU4YmRhOTgiLCJhZG9wdGVyTmFtZSI6IkFuYSBkZSBKZXN1cyIsImlhdCI6MTc3MjQ5OTUwNiwiZXhwIjoxNzcyNzU4NzA2fQ.pG57BMb9s7JI5FDcCmHIAnOhHGqm6yE_IaTx5LSXTh0`

    it('Nome no Perfil', () => {

        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/09d11a68-551c-41f5-b2ea-2a949e8bda98',
            headers: {
                authorization
            }
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('Ana de Jesus')
        })
    })
})