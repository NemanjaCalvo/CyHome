describe("describe test", () => {
  it("login test", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    cy.get('a[href="/login"]').click();
    cy.get("#email").type("bajicnemanja32@gmaill.com");
    cy.get("#password").type("nemanja94");
    cy.get("button").click();
    cy.get(".nav-link").eq(3).click();
  });
  // it("register test", () => {
  //   cy.visit("https://gallery-app.vivifyideas.com/");
  //   cy.get("a[href='/register']").click();
  //   cy.get("#first-name").type("Nemus");
  //   cy.get("#last-name").type("Bajic");
  //   cy.get("#email").type("bajker@gmail.com");
  //   cy.get("#password").type("nemanja94");
  //   cy.get("#password-confirmation").type("nemanja94");
  //   cy.get(".form-check-input").click();
  //   cy.get("button").click();
  // });
  it("commenting picture", () => {
    cy.visit("https://gallery-app.vivifyideas.com/");
    cy.visit("https://gallery-app.vivifyideas.com/");
    cy.get('a[href="/login"]').click();
    cy.get("#email").type("bajicnemanja32@gmaill.com");
    cy.get("#password").type("nemanja94");
    cy.get("button").click();
    cy.get("a[href='/galleries/377']").click();
    cy.get("textarea").type("neki komentar");
    cy.get("button").click();
  });
});
