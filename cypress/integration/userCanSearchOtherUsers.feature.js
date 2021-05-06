describe("User can search  other users", () => {
  beforeEach(() => {
    cy.server();
    cy.route({
      method: "GET",
      url: "http:/localhost:3000/api/users",
      response: "fixtures:users.json",
    });
    cy.visit("/");
    cy.get('[data-cy="search-input"]').type("defunkt");
  });
  it("is expected to display the user", () => {
    cy.get('[data-cy="user-result"]').should("contain", "users");
  });
});
