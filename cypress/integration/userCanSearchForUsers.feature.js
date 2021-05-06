describe('User can search for users', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to use inputs', () => {
    cy.get('[data-cy=search-bar]').type('Bob')
    cy.get('[data-cy=search-btn]').click()
  })

  
})
