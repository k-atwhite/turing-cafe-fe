beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

//

describe("Home page display", () => {
  it("Should visit the home page and render reservation cards", () => {
    cy.contains("Turing Cafe Reservations")
      .get(".reservation-details")
      .contains("Christie");
  });

  it("Should show a form with input for name", () => {
    cy.get("input[name=name]").should("be.visible");
  });

  it("Should show a form with input for date", () => {
    cy.get("input[name=date]").should("be.visible");
  });

  it("Should show a form with input for time", () => {
    cy.get("input[name=time]").should("be.visible");
  });

  it("Should show a form with input for number of guests", () => {
    cy.get("input[name=number]").should("be.visible");
  });

  it("Should have a submit button", () => {
    cy.get("button").contains("make reservation");
  });
});

describe("Form functionality", () => {
  it("Should take input from user and store to state", () => {});
});
