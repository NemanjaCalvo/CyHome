/// <reference types = "Cypress" />
import { loginPage } from "../page_object/loginPage";
import { createGallery } from "../page_object/createGallery";
import { faker } from "@faker-js/faker";

let credentials = {
  email: "bajicnemanja32@gmaill.com",
  password: "nemanja94",
};

let galleryData = {};
describe("create gallery test", () => {
  before("visist app and log in", () => {
    cy.visit("/login");
    loginPage.login(credentials.email, credentials.password);
    cy.url().should("not.include", "/login");
  });

  it("create gallery", () => {
    createGallery.createGalleryLink.click();
    createGallery.createGalleryHeading;
  });
});
