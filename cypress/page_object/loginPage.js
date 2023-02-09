class LoginPage {
  get loginLink() {
    return cy.get('a[href="/login"]');
  }

  get emailInput() {
    return cy.get("#email");
  }

  get passInput() {
    return cy.get("#password");
  }

  get submitBtn() {
    return cy.get("button");
  }

  login(email, password) {
    this.emailInput.type(email);
    this.passInput.type(password);
    this.submitBtn.click();
  }
}

export const loginPage = new LoginPage();
