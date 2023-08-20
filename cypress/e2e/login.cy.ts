describe('Login Component', () => {
  beforeEach(() => {
    cy.visit('auth/login');
  });

  it('should fill in login form and submit', () => {
    // Fill in email and password
    cy.get('[data-test=email]').type('ali@gmail.com');
    cy.get('[data-test=password]').type('123456');

    // Submit the form
    cy.get('[data-test=login-button]').click();

    cy.url().should('include', '/home');
  });

  it('should show error for invalid login', () => {
    // Fill in incorrect email and password
    cy.get('[data-test=email]').type('invalid@example.com');
    cy.get('[data-test=password]').type('invalidpassword');

    // Submit the form
    cy.get('[data-test=login-button]').click();

    // Verify that an error message is displayed
    cy.get('[data-test=error-message]').should('be.visible');
    cy.get('[data-test=error-message]').should(
      'contain',
      'Invalid email or password'
    );
  });
});
