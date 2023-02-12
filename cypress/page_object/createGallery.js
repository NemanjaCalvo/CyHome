class CreateGallery {
  get goToCreateGallery() {
    return cy.get("a[href='/create']");
  }
  get galleryName() {
    return cy.get("#title");
  }
  get galleryDescription() {
    return cy.get("#description");
  }
  get imgUrl() {
    return cy.get(".form-control");
  }
  get submitBtn() {
    return cy.get(".btn");
  }

  createGallery(galleryName, galleryDescription, imgUrl) {
    this.goToCreateGallery.click();
    this.galleryName.type(galleryName);
    this.galleryDescription.type(galleryDescription);
    this.imgUrl.type(imgUrl);
    this.submitBtn.click();
  }
}

export const createGallery = new CreateGallery();
