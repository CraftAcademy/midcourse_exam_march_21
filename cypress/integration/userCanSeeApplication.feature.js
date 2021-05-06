describe("Application main view", () => {
  before(() => {
    cy.visit("/");
  });

  it("contains titel", () => {
    cy.get("section[name='title']").should("contain", "GitHub Search engine");
    cy.get("[data-cy='user-search-input']").should("be.visible");
    cy.get("[data-cy='search-button']").should("be.visible");
  });
});
