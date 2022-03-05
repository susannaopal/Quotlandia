describe('Landing Page User Flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/');
  });

  it('should be able to visit the url', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/');
  });

  it('should see a title', () => {
    cy.get('.nav')
      .get('.title')
      .contains('Welcome to Quotelandia')
      .should('be.visible');
  });

  it('should be able to see a button to view quotes on the nav', () => {
    cy.get('.nav-btns-container')
      .get('.left-side-btn')
      .contains('Quotes')
      .should('be.visible');
  });

  it('should be able to see a button to go to an author search on the nav', () => {
    cy.get('.nav-btns-container')
      .get('.right-side-btn')
      .contains('Search')
      .should('be.visible');
  });

  it('should see an about message on the nav', () => {
    cy.get('.nav')
      .get('.about-msg-div')
      .get('.greeting-msg')
      .contains('a land for words...')
      .should('be.visible');
  });

  it('should see a welcome message on the home landing page', () => {
    cy.get('.welcome-msg')
      .should('be.visible');
  });

  it('should see a background image', () => {
      cy.get('.App')
        .should('be.visible');
  });

  it('should see a footer with the app creator\'s name', () => {
      cy.get('.footer-div')
        .get('.footer-div > p')
        .contains('Quotelandia was created by Susanna Carey')
        .should('be.visible');
  });
});