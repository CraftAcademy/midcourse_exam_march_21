describe('User can search for users', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('is expected to use inputs', () => {
    cy.get('[data-cy=search-bar]').type('Bob')
    cy.get('[data-cy=search-btn]').click()
  })

  it('is expected to receive user card image', () => {
    cy.get('[data-cy=user-card]')
    .firs()
    .find('[data-cy=user-img]').should('exist')
  })

  it('is expected to receive user card name', () => {
    cy.get('[data-cy=user-card]')
    .firs()
    .find('[data-cy=user-name]').should('contain', 'Bob')
  })

  it('is expected to receive user card button', () => {
    cy.get('[data-cy=user-card]')
    .firs()
    .find('[data-cy=user-btn]').should('contain', 'More')
  })


})
