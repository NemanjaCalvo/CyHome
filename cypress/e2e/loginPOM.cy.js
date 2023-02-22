import { loginPage } from "../page_object/loginPage";
import { faker } from "@faker-js/faker";

const credentials = {
  email: "bajicnemanja32@gmaill.com",
  password: "nemanja94",
  // invalidEmail: faker.internet.email(),
  // invalidPass: faker.lorem.word(),
};

describe("describe test", () => {
  beforeEach("visit app and click on login link", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    loginPage.loginLink.click();
    // cy.loginViaBack("bajicnemanja32@gmaill.com", "nemanja94");
    cy.url().should("include", "/login");
    loginPage.loginPageHeading
      .should("be.visible")
      .and("have.text", "Please login");
  });

  it("login with invalid email", () => {
    cy.intercept("@unsuccesfulLogin").then(interception);

    loginPage.login(credentials.invalidEmail, credentials.password);
    loginPage.errorMessage
      .should("be.visible")
      .and("have.css", "background-color", "rgb(248, 215, 218)")
      .and("have.class", "alert-danger");
  });

  it.only("login test", () => {
    cy.intercept({
      method: "POST",
      url: "https://gallery-app.vivifyideas.com/api/auth/login",
    }).as("login");

    loginPage.login(credentials.email, credentials.password);
    cy.wait("@login").then((interception) => {
      console.log("INTERCEPTION", interception);
      expect(interception.response.statusCode).eq(200);
    });

    cy.url().should("not.include", "/login");
  });
});
