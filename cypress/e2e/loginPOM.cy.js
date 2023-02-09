import { loginPage } from "../page_object/loginPage";

const credentials = {
  email: "bajkerNe@gmail.com",
  pass: "nemanja94",
};

describe("describe test", () => {
  before("visit app and click on login link", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    loginPage.loginLink.click();
  });
  it("login test", () => {
    loginPage.login(credentials.email, credentials.pass);
  });
});
