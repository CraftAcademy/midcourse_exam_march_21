describe('User can search Github API', () => {
	beforeEach(() => {
		cy.server()
		cy.route({
			method: 'GET',
			url: 'https://api.github.com/search/users/',
			response: 'fixture:githubexampleresponse.json',
		})

		cy.visit('/')
	})

	describe('User is able to search for a User', () => {
		it('is expected to respond with a list of closest matching users ', () => {
			cy.get('[data-cy=input-search]').type('barack')
			cy.get('[data-cy=submit-search]').click()
			cy.get('[data-cy=user-list]').within(()=> {
        cy.get('[data-cy=user-login]').should('contain', 'barack');
        cy.get('[data-cy=user-repo]').should('contain', 'https://api.github.com/users/barack')
      })
      
		})
	})
})

