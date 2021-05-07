describe('User can search for Barack', () => {

  before(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://api.github.com/search/users?q=Barack',
      response: 'fx:gitHubSearchForBarack'
    })
    cy.visit('/')
  });

  it('is expected to display a list of users', () => {

  });
});