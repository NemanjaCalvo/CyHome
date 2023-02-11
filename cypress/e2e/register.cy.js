import { registerPage } from "../page_object/registerPage";

describe("describe test", () => {
  let userData = {
    firstName: "Nemus",
    lastName: "Bajic",
    email: "bajkerNe@gmail.com",
    pass: "nemanja94",
  };

  let userData1 = {
    firstName: " ",
    lastName: "Bajic",
    email: "bajkerNe@gmail.com",
    pass: "nemanja94",
  };

  let userData2 = {
    firstName: "Nemus",
    lastName: " ",
    email: "bajkerNe@gmail.com",
    pass: "nemanja94",
  };

  let userData3 = {
    firstName: "Nemus",
    lastName: "Bajic",
    email: " ",
    pass: "nemanja94",
  };

  let userData4 = {
    firstName: "Nemus",
    lastName: "Bajic",
    email: "bajkerNe@gmail.com",
    pass: " ",
  };

  beforeEach("visit app and click on register link", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    registerPage.registerLink.click();
  });

  it("register test", () => {
    registerPage.registerData(
      // cy.visit("https://gallery-app.vivifyideas.com/");
      // cy.get(locators.navbar.registerButton).click();
      userData.firstName,
      userData.lastName,
      userData.email,
      userData.pass
    );
  });

  it("register without first name", () => {
    registerPage.registerData(
      userData1.firstName,
      userData1.lastName,
      userData1.email,
      userData1.pass
    );
  });

  it("register without last name", () => {
    registerPage.registerData(
      userData2.firstName,
      userData2.lastName,
      userData2.email,
      userData2.pass
    );
  });

  it("register without email", () => {
    registerPage.registerData(
      userData3.firstName,
      userData3.lastName,
      userData3.email,
      userData3.pass
    );
  });

  it("register without pass", () => {
    registerPage.registerData(
      userData4.firstName,
      userData4.lastName,
      userData4.email,
      userData4.pass
    );
  });
});
