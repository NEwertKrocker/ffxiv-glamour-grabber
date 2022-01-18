describe('Home page', () => {
  beforeEach(() => {
    cy.intercept('https://xivapi.com/servers', {
      body: [
        "Adamantoise",
        "Aegis",
        "Alexander",
        "Anima",
        "Asura",
        "Atomos",
        "Bahamut",
        "Balmung",
        "Behemoth",
      ]
    }).as('Dummy-servers');
    cy.visit('http://localhost:3000/')
  })
  it('should display a header', () => {
    cy.get('.app-title').contains('FFXIV Glamour Grabber')
  })
  it('should contain a search form', () => {
    cy.get('form').contains('Whose outfit do you want to steal?');
    cy.get('form').contains('What server were they on?');
    cy.get('input');
    cy.get('select').contains('Asura');
    cy.get('button').contains('Grab that Glamour!')
    cy.get('.saved-btn').contains('Saved Items');
  })
})

describe('Searching for characters', () => {
  beforeEach(() => {
    cy.intercept('https://xivapi.com/character/search?name=Arcana%20Clairavox', {
      body: {
        "Pagination": {
          "Page": 1,
          "Results": 1,
          "ResultsTotal": 1
          },
        "Results": [
          {
            "Avatar": "https://img2.finalfantasyxiv.com/f/610623530044b08af7adefb950922b13_d0a0f515a62457570c9b44997063e3c1fc0_96x96.jpg?1642525907",
            "ID": 38125419,
            "Name": "Arcana Clairavox",
            "Server": "Brynhildr (Crystal)"
          }
        ]
      }
    }).as('Arcana-search');
    cy.intercept('https://xivapi.com/character/search?name=Kennesaw%20Landis', {
      body: {
        "Pagination": {
          "Page": 1,
          "Results": 1,
          "ResultsTotal": 1
          },
        "Results": [
          {
            "Avatar": "https://img2.finalfantasyxiv.com/f/b910049ac4ecac3dc3f2a2f1d17bfa09_d0a0f515a62457570c9b44997063e3c1fc0_96x96.jpg?1642527571",
            "ID": 38855494,
            "Name": "Kennesaw Landis",
            "Server": "Brynhildr (Crystal)"
          }
        ]
      }
    }).as('Kennesaw-search');
    cy.intercept('https://xivapi.com/character/38125419', {
      body: {
        "Character": {
          "Name": "Arcana Clairavox",
          "Portrait": "https://img2.finalfantasyxiv.com/f/610623530044b08af7adefb950922b13_d0a0f515a62457570c9b44997063e3c1fl0_640x873.jpg?1642457602",
          "GearSet": {
        "Gear": {
        "Body": {
        "Creator": null,
        "Dye": null,
        "ID": 17743,
        "Materia": [],
        "Mirage": null
        },
        "Bracelets": {
        "Creator": null,
        "Dye": null,
        "ID": 18491,
        "Materia": [],
        "Mirage": null
        },
        "Earrings": {
        "Creator": null,
        "Dye": null,
        "ID": 18403,
        "Materia": [],
        "Mirage": null
        },
        "Feet": {
        "Creator": null,
        "Dye": null,
        "ID": 17746,
        "Materia": [],
        "Mirage": null
        },
        "Hands": {
        "Creator": null,
        "Dye": null,
        "ID": 17744,
        "Materia": [],
        "Mirage": null
        },
        "Head": {
        "Creator": null,
        "Dye": null,
        "ID": 17742,
        "Materia": [],
        "Mirage": null
        },
        "Legs": {
        "Creator": null,
        "Dye": null,
        "ID": 17745,
        "Materia": [],
        "Mirage": null
        },
        "MainHand": {
        "Creator": null,
        "Dye": null,
        "ID": 17817,
        "Materia": [],
        "Mirage": null
        },
        "Necklace": {
        "Creator": null,
        "Dye": null,
        "ID": 18408,
        "Materia": [],
        "Mirage": null
        },
        "OffHand": {
        "Creator": null,
        "Dye": null,
        "ID": 17832,
        "Materia": [],
        "Mirage": null
        },
        "Ring1": {
        "Creator": null,
        "Dye": null,
        "ID": 18340,
        "Materia": [],
        "Mirage": null
        },
        "Ring2": {
        "Creator": null,
        "Dye": null,
        "ID": 18262,
        "Materia": [],
        "Mirage": null
        },
        "SoulCrystal": {
        "Creator": null,
        "Dye": null,
        "ID": 4542,
        "Materia": [],
        "Mirage": null
        }
        },
        "ID": 38125419,
        "Server": "Brynhildr",
      },
    }
  }
}).as('Arcana-Gear');
  cy.intercept('https://xivapi.com/character/38855494', {
    body: {
        "Character": {
          "Name": "Kennesaw Landis",
          "Portrait": "https://img2.finalfantasyxiv.com/f/b910049ac4ecac3dc3f2a2f1d17bfa09_d0a0f515a62457570c9b44997063e3c1fl0_640x873.jpg?1642527571",
          "GearSet": {
            "Gear": {
              "Body": {
              "Creator": null,
              "Dye": 5738,
              "ID": 34966,
              "Materia": [],
              "Mirage": 34023
              },
              "Bracelets": {
              "Creator": null,
              "Dye": null,
              "ID": 35010,
              "Materia": [],
              "Mirage": null
              },
              "Earrings": {
              "Creator": null,
              "Dye": null,
              "ID": 35000,
              "Materia": [],
              "Mirage": null
              },
              "Feet": {
              "Creator": null,
              "Dye": null,
              "ID": 34969,
              "Materia": [
              33934,
              33934
              ],
              "Mirage": 34026
              },
              "Hands": {
              "Creator": null,
              "Dye": null,
              "ID": 34967,
              "Materia": [
              33933,
              33918
              ],
              "Mirage": 3520
              },
              "Head": {
              "Creator": null,
              "Dye": null,
              "ID": 34965,
              "Materia": [],
              "Mirage": 34022
              },
              "Legs": {
              "Creator": null,
              "Dye": null,
              "ID": 34025,
              "Materia": [
              26728,
              33920
              ],
              "Mirage": null
              },
              "MainHand": {
              "Creator": null,
              "Dye": null,
              "ID": 34865,
              "Materia": [
              33933,
              33920
              ],
              "Mirage": 30243
              },
              "Necklace": {
              "Creator": null,
              "Dye": null,
              "ID": 34910,
              "Materia": [
              33920
              ],
              "Mirage": 24415
              },
              "Ring1": {
              "Creator": null,
              "Dye": null,
              "ID": 34920,
              "Materia": [
              26738
              ],
              "Mirage": null
              },
              "Ring2": {
              "Creator": null,
              "Dye": null,
              "ID": 35015,
              "Materia": [],
              "Mirage": null
              },
              "SoulCrystal": {
              "Creator": null,
              "Dye": null,
              "ID": 25216,
              "Materia": [],
              "Mirage": null
              }
            },
        "ID": 38855494,
        "Server": "Brynhildr",
      },
    }
    }
  }).as('Kennesaw-Gear');
    cy.visit('http://localhost:3000/')
  })
  it('should allow you to search for a character by name', () => {
    cy.get('input').type('Arcana Clairavox');
    cy.get('form > button').click()
    cy.wait(3000);
    cy.get('.result').click();
    cy.get('p').contains('Loading');
    cy.wait(2000);
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

describe('Item name fetching', () => {
  beforeEach(() => {
    cy.intercept('https://xivapi.com/item/*', {
      body: {
        "Name": "Dummy Boots of Sampling"
      }
    }).as('Dummy-Boots')
    cy.visit('http://localhost:3000/')
    cy.get('input').type('Arcana Clairavox');
    cy.get('form > button').click()
    cy.wait(2000);
    cy.get('.result').click();
  })
  it('should call up a list of equipment', () => {
    cy.get('.item-details').contains('Dummy Boots of Sampling');
  })
  it('should be able to save the dummy equipment', () => {
    cy.get('.item-details').click({ multiple: true });
    cy.get('.saved-btn').click();
    cy.get('.item-details').should('have.length', 10);
  })
})
