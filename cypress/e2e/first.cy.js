const webpath='/imbd/index.html'
describe('Movie Application', () => {
  // Test the movie search functionality
  beforeEach(()=>{
    cy.visit(webpath)
  })
  it('searches for movies successfully', () => {
      cy.intercept('GET', 'https://api.themoviedb.org/3/search/movie*').as('searchMovie')

      cy.get('.search input').type('Inception') // Use a movie title that is likely to be in the database
      cy.get('.search button').click()

      cy.wait('@searchMovie').its('response.statusCode').should('eq', 200)

      cy.get('.card') // Wait for the cards to be rendered
          .should('be.visible') // Assert that cards are visible
          .its('length') // Assert that at least one card is returned
          .should('be.gt', 0)
      cy.get('.card') // Get the first card
          .first()
          .find('h2') // Find the movie title in the card
          .should('contain', 'Inception') // Assert that the movie title is correct
  })

  // Test the trending movies functionality
  it('shows trending movies successfully', () => {
      cy.intercept('GET', 'https://api.themoviedb.org/3/trending/all/day*').as('trendingMovies')

      cy.wait('@trendingMovies').its('response.statusCode').should('eq', 200)

      cy.get('.trending .movies-grid .card') // Wait for the trending movies cards to be rendered
          .should('be.visible') // Assert that cards are visible
          .its('length') // Assert that at least one card is returned
          .should('be.gt', 0)
  })
  it('shows trending movies correctly', () => {
    cy.get('.trending .movies-grid .card')
      .should('be.visible')
      .its('length')
      .should('be.gt', 0)
  })

  it('Searches for a movie', () => {
    cy.get('.search input').type('Inception');
    cy.get('.search button').click();

    cy.get('.favorites .movies-grid .card').should('have.length.gt', 0);
  });

  it('Opens a movie details popup', () => {
    cy.get('.search input').type('Inception');
    cy.get('.search button').click();

    cy.get('.favorites .movies-grid .card').first().click();
    cy.get('.popup-container').should('have.class', 'show-popup');
  });

  it('Closes a movie details popup', () => {
    cy.get('.search input').type('Inception');
    cy.get('.search button').click();

    cy.get('.favorites .movies-grid .card').first().click();
    cy.get('.popup-container .x-icon').click();
    cy.get('.popup-container').should('not.have.class', 'show-popup');
  });

  it('Checks trending movies are displayed', () => {
    cy.get('.trending .movies-grid .card').should('have.length.gt', 0);
  });

  it('Add movie to favorites', () => {
    cy.get('.search input').type('Inception');
    cy.get('.search button').click();

    cy.get('.favorites .movies-grid .card').first().click();
    cy.get('.popup-container .heart-icon').click();

    // The movie should be stored in the local storage
    cy.window().then((window) => {
      const favoriteMovies = JSON.parse(window.localStorage.getItem('movie-id'));
      expect(favoriteMovies).to.have.length.gt(0);
    });
  });

  it('Remove movie from favorites', () => {
    cy.get('.search input').type('Inception');
    cy.get('.search button').click();

    cy.get('.favorites .movies-grid .card').first().click();
    cy.get('.popup-container .heart-icon').click();  // Add to favorites
    cy.get('.popup-container .heart-icon').click();  // Remove from favorites

    // The movie should be removed from the local storage
    cy.window().then((window) => {
      const favoriteMovies = JSON.parse(window.localStorage.getItem('movie-id'));
      expect(favoriteMovies).to.have.length(0);
    });
  });
  

  
  
  
})
