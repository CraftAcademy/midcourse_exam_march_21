describe('Application main view', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "https://api.github.com/search/users/",
      response: "fixture:github_users.json"
    })
    cy.visit('/')
    cy.get('[data-cy="input-name"]').type('mojombo')
    cy.get('[data-cy="search-button"]').click()
  });

  it('display user information', () => {
    cy.get('data-cy="user-name"').should('contain', 'mojombo')
  });

  it('contains titel', () => {
    cy.get("section[name='title']").should('contain', 'GitHub Search engine')
    cy.get('[data-cy="input-name"]').should('exist')
    cy.get('[data-cy="search-button"]').click()
  });
});