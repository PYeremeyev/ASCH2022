describe('Main Page tests', () => {

    beforeEach(() => {
        cy.visit(Cypress.env('baseUrl'));
        cy.login(Cypress.env('usar'), Cypress.env('pazz'));
    });

    it('Search and open current main post', () => {
        cy.get('#main-hot').find('.eg-front-page-featured-grid-element-1').first().then((elem) =>{
            const mainNewsLabel = elem.text();
            cy.searchAndNavigateToPost(mainNewsLabel, mainNewsLabel);
        });
    });

    it('Count of values in Tools dropdown is 14', () => {
        cy.contains('Tools').should('be.visible').trigger('mouseover');
        cy.get('.dropdown-menu li').should('be.visible').and('have.length', 14);
        });
    });
