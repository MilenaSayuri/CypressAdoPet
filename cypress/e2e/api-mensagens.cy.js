describe('Api Adopet', () => {

    it('Mensagens da API', () => {

        cy.request({
            method: 'POST',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/login',
            body: {
                email: Cypress.env('email'),
                password: Cypress.env('password')
            }

        }).then((loginRes) => {

            const token = loginRes.body.token

            cy.request({
                method: 'GET',
                url: 'https://adopet-api-i8qu.onrender.com/mensagem/09d11a68-551c-41f5-b2ea-2a949e8bda98',
                headers: {
                    authorization: `Bearer ${token}`
                }

            }).then((res) => {
                expect(res.status).to.equal(200)
                expect(res.body).to.not.be.empty
                expect(res.body).to.have.property('msg')
            })

        })

    })

})