describe('User can search for an organisation', () => {
	before(() => {
		cy.server()
		cy.route({
			method: 'GET',
			url: 'https://api.github.com/organizations/',
			response: 'fixture:githubexampleresponseorgs.json',
		})
		cy.visit('/')
	})

	describe('User is able to use search function to search for an organisation', () => {
		it('is expected to respond with a list or orgs', () => {
			cy.get('[data-cy=input-search]').type('CraftAcademy')
			cy.get('[data-cy=submit-search]').click()
			cy.get('[data-cy=list-of-orgs]').should('contain', 'errfree')
		})
	})
})
