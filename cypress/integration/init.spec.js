describe('API request', () => {
    it('displays radio stations from the API', () => {
      cy.request('https://api.jsonbin.io/b/5ffe894af98f6e35d5fbe749')
        .should((response) => {
          expect(response.status).to.eq(200)
          expect(response.body).to.have.length(5)
          expect(response).to.have.property('headers')
          expect(response).to.have.property('duration')
        })
    })
})