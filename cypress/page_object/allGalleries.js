class AllGalleries {
  get allGalleriesLink() {
    return cy.get("a[href='/']");
  }

  get searchInput() {
    return cy.get(".form-control");
  }

  get searchSubmitButton() {
    return cy.get(".btn");
  }

  get getToSpecifiedGallery() {
    return cy.get(".box-title");
  }

  get commentGallery() {
    return cy.get("textarea");
  }

  allGalleries(formControl) {
    this.searchInput.type(formControl);
    this.searchSubmitButton.click();
  }
}

export const allGalleries = new AllGalleries();
