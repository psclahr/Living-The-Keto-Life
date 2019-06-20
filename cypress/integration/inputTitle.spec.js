describe("Input for Title", () => {
  beforeEach(() => {
    cy.visit("/create");
  });
  it("focus input on load", () => {
    cy.focused().should("have.class", "titleInput");
  });

  it("input accepts", () => {
    const typedText = "Chicken Fajita";
    cy.get(".titleInput")
      .type(typedText)
      .should("have.value", typedText);
  });
});
