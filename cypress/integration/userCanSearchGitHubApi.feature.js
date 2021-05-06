describe('User can search Github API', () => {
	beforeEach(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://api.github.com/search/users/**',
      response: 'fixture:githubexampleresponse.json'
    })
    cy.visit('/')
  })

  it('is expected to respond with a list of users ', () => {
    cy.get('[data-cy=input-search]').type('barack');
    cy.get('[data-cy=submit-search]').click();
    cy.get('[data-cy=users-list]').should('contain', 'barack');
  });
})
