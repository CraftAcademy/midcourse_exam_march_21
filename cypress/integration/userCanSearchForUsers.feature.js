describe('User can search for users', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: "https://api.github.com/users",
      response: 'fixture:example.json'
    })
    cy.visit('/')
  })

  it('is expected to use inputs', () => {
    cy.get('[data-cy=search-bar]').type('Bob')
    cy.get('[data-cy=search-btn]').click()
  })

  it('is expected to receive')
})
