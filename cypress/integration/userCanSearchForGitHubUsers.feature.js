describe('User can search for Barack', () => {

  before(() => {
    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://api.github.com/search/users?q=Barack',
      response: 'fx:gitHubSearchForBarack'
    })
    cy.visit('/')
    cy.get('[data-cy=query-field]').type('Barack')
    cy.get('[data-cy=query-button]').click()
  });

  it('is expected to display a list of users', () => {
    cy.get('[data-cy=query-results]').within(()=> {
      cy.get('[data-cy=user-10196880]').should('contain.text', 'PresidentObama')
    })
  });
});