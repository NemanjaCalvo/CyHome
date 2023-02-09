class RegisterPage {
  get registerLink() {
    return cy.get("a[href='/register']");
  }

  get firstName() {
    return cy.get("#first-name");
  }

  get lastName() {
    return cy.get("#last-name");
  }

  get emailInput() {
    return cy.get("#email");
  }

  get passInput() {
    return cy.get("#password");
  }

  get passConfInput() {
    return cy.get("password-confirmation");
  }

  get tosChecbox() {
    return cy.get("button");
  }

  get submitBtn() {
    return cy.get("button");
  }

  registerWithValidData(firstName, lastName, email, password) {
    this.firstName.type(firstName);
    this.lastName.type(lastName);
    this.emailInput.type(email);
    this.passInput.type(password);
    this.passConfInput.type(password);
    this.tosChecbox.check();
    this.submitBtn.click();
  }
}

export const registerPage = new RegisterPage();
