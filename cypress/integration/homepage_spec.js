beforeEach(() => {
  cy.visit("http://localhost:3000/");
});

describe("Home page display", () => {
  it("Should visit the home page", () => {
    cy.contains("Turing Cafe Reservations");
  });

  it("Should show reservation cards", () => {
    cy.get(".reservation-details").should("have.length", 9);
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
  it("Should take input from user and store to state", () => {
    cy.get("input[name=name]")
      .type("Katherine")
      .should("have.value", "Katherine")
      .get("input[name=date]")
      .type("Sept 17")
      .should("have.value", "Sept 17")
      .get("input[name=time]")
      .type("7:00")
      .should("have.value", "7:00")
      .get("input[name=number]")
      .type("6")
      .should("have.value", "6");
  });
});
