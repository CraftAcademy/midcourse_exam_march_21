describe("user can search for github users", () => {
  before(() => {
    cy.server()
    cy.route({
      method: "GET",
      url: "https://api.github.com/search/users",
      response: "sevader14_user_search_response.json"
    })
    cy.visit("/");
  });

  it("is expected to display results of search querry", () => {
    cy.get('[data-cy="user-search-input"]').type("sevader14");
    cy.get('[data-cy="search-button"]').click();
    cy.get('[data-cy="results-display"]').should("be.visible");
  });
});
