describe('Home page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('should display a header', () => {
    cy.get('.app-title').contains('FFXIV Glamour Grabber')
  })
  it('should contain a search form', () => {
    cy.get('form').contains('Whose outfit do you want to steal?');
    cy.get('form').contains('What server were they on?');
    cy.get('input');
    cy.get('button').contains('Grab that Glamour!')
    cy.get('.saved-btn').contains('Saved Items');
  })
})

describe('Searching for characters', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })
  it('should allow you to search for a character by name', () => {
    cy.get('input').type('Arcana Clairavox');
    cy.get('form > button').click()
    cy.wait(4000);
    cy.get('.result').click();
    cy.get('p').contains('Loading')
    cy.get('.outfit').contains('This is Arcana Clairavox\'s outfit.');
  })
  it('should allow you to search for a different character by name', () => {
    cy.get('input').type('Kennesaw Landis');
    cy.get('form > button').click()
    cy.wait(4000);
    cy.get('.result').click();
    cy.get('p').contains('Loading')
    cy.get('.outfit').contains('This is Kennesaw Landis\'s outfit.');
  })
})

describe('Outfit page', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
    cy.get('input').type('Arcana Clairavox');
    cy.get('form > button').click()
    cy.wait(4000);
    cy.get('.result').click();
  })
  it('should display a loading message', () => {
    cy.get('p').contains('Loading');
  })
  it('should display an image of the character', () => {
    cy.get('.portrait');
  })
  it('should display the character\'s name', () => {
    cy.get('.outfit').contains('This is Arcana Clairavox\'s outfit.');
  })
  it('should display the character\'s equipment', () => {
    cy.get('.item-details').should('have.length', 10);
    cy.get('.item-icon').should('have.length', 10);
    cy.get('.item-name').should('have.length', 10);
  })
  it('should have no selected items by default', () => {
    cy.get('.false').should('have.length', 10);
  })
  it('should have a link to the saved items page', () => {
    cy.get('.saved-btn');
  })
})

describe('Selecting and saving items', () => {
  before(() => {
    cy.visit('http://localhost:3000/')
    cy.get('input').type('Kennesaw Landis');
    cy.get('form > button').click()
    cy.wait(4000);
    cy.get('.result').click();
  })
  it('should allow for clicking and selecting items', () => {
    cy.get('#34023').click();
    cy.get('#34026').click();
    cy.get('#30243').click();
    cy.get('.true').should('have.length', 3);
  })
  it('should keep those saved items on the saved items page', () => {
    cy.get('.saved-btn').click();
    cy.get('#34023');
    cy.get('#34026');
    cy.get('#30243');
    cy.get('.item-details').should('have.length', 3);
  })
  it('should keep those saved items if you leave the page', () => {
    cy.get('.return-btn').click();
    cy.visit('http://localhost:3000/saved');
    cy.get('#34023');
    cy.get('#34026');
    cy.get('#30243');
    cy.get('.item-details').should('have.length', 3);
  })
  it('should allow you to discard saved items', () => {
    cy.get('.discard-icon').first().click();
    cy.get('.item-details').should('have.length', 2);
    cy.get('#34026');
    cy.get('#30243');
  })
  it('should allow you to return to the search page', () => {
    cy.get('.return-btn').click();
    cy.get('form').contains('Whose outfit do you want to steal?');
    cy.get('form').contains('What server were they on?');
  })
})
