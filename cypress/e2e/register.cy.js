const locators = require("../fixtures/locators.json");

describe("describe test", () => {
  let userData = {
    firstName: "Nemus",
    lastName: "Bajic",
    email: "bajkerNe@gmail.com",
    pass: "nemanja94",
  };

  beforeEach("visit app and click on register link", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    cy.get(locators.navbar.registerButton).click();
  });
  it("register test", () => {
    // cy.visit("https://gallery-app.vivifyideas.com/");
    // cy.get(locators.navbar.registerButton).click();
    cy.get(locators.register.firsName).type(userData.firstName);
    cy.get(locators.register.lastName).type(userData.lastName);
    cy.get(locators.common.emailInput).type(userData.email);
    cy.get(locators.common.passwordInput).type(userData.pass);
    cy.get(locators.register.passConfig).type(userData.pass);
    cy.get(locators.register.checkbox).click();
    cy.get(locators.common.submitButton).click();
  });
});
