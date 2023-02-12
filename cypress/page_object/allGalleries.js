class AllGalleries {
  get AllGalleriesLink() {
    return cy.get("a[href='/']");
  }

  get searchForGallery() {
    return cy.get(".form-control");
  }

  get submitSearch() {
    return cy.get(".btn");
  }

  get getToSpecifiedGallery() {
    return cy.get("a[href='/galleries/703']");
  }

  get commentGallery() {
    return cy.get("textarea");
  }

  allGalleries(formControl, textarea) {
    this.AllGalleriesLink.click();
    this.searchForGallery.type(formControl);
    this.submitSearch.click();
    this.getToSpecifiedGallery.click();
    this.commentGallery.type(textarea);
  }
}

export const allGalleries = new AllGalleries();
