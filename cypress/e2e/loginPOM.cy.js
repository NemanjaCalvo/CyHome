import { loginPage } from "../page_object/loginPage";
import { faker } from "@faker-js/faker";

const credentials = {
  email: "bajkerNe@gmail.com",
  password: "nemanja94",
  invalidEmail: faker.internet.email(),
  invalidPass: faker.lorem.word(),
};

describe("describe test", () => {
  beforeEach("visit app and click on login link", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    loginPage.loginLink.click();
    cy.url().should("include", "/login");
    loginPage.loginPageHeading
      .should("be.visible")
      .and("have.text", "Please login");
  });

  it.only("login with invalid email", () => {
    loginPage.login(credentials.invalidEmail, credentials.pass);
    loginPage.errorMessage
      .should("be.visible")
      .and("have.css", "background-color", "rgb(248, 215, 218)")
      .and("have.class", "alert-danger");
  });

  it("login test", () => {
    loginPage.login(credentials.email, credentials.password);
  });
});
