describe('User can use the search field', () => {
  describe('Successfully', () => {
    beforeEach(() => {
      cy.visit('/')
      cy.intercept('https://api.github.com/search/users?q=**', {fixture: 'searchFixture.json'})

      cy.get('[data-cy="input-field"]').type('Barack')
      cy.get('[data-cy="search-button"]').click()
    })
    it('is expected to display a list of 3 users', () => {
      cy.get('[data-cy="user-container"]').should('have.length', 3)
    })
  
    it('is expected to display the expected user information', () => {
      cy.get('[data-cy="user-container"]').within(() => {
        cy.get('[data-cy="username"]').should('contain', 'barack')
        cy.get('[data-cy="avatar"]').should('have.attr', 'src', "https://avatars3.githubusercontent.com/u/681626?v=4")
        cy.get('[data-cy="avatar"]').should('have.attr', 'href', "https://api.github.com/users/barack")
      })
    })
  })


})