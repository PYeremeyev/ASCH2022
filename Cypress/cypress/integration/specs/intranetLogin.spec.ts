describe('Intranet Test', () => {

    it('Login happyPath', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        cy.get('#password').type(Cypress.env('pazz'), { log: false });
        cy.contains('Login').should('be.visible').click();
        cy.get('#msg.errors').should('not.exist');
        cy.get('#profile > .avatar-block').should('be.visible').click();

        const userName = Cypress.env('usar').replace('.', "-");
        cy.get('.user-nicename').contains(userName).should((elem) => {
            expect(elem.text()).to.equal('@' + userName);
        });
    });

    it('Login failed', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        cy.get('#password').type('123');
        cy.contains('Login').should('be.visible').click();
        cy.get('#msg.errors').should('be.visible').contains('Invalid credentials.');
        });

    it('Logout after login', () => {
        cy.visit(Cypress.env('baseUrl'));
        cy.get('#username').type(Cypress.env('usar'));
        cy.get('#password').type(Cypress.env('pazz'), { log: false });
        cy.contains('Login').should('be.visible').click();
        cy.get('.logout-button').should('be.visible').click();
        cy.get('#logout').should('be.visible');
        cy.get('#logout > #msg.success > h2').should('be.visible').contains('Logout successful');
        cy.get('#logout > #msg.success > p').should('be.visible').contains('For security reasons, exit your web browser.');
        });
});