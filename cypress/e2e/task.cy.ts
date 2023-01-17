describe('tasks spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/');
  });
  it('should have correct text', () => {
    cy.get('h1').should('have.text', 'Tasks');
    cy.get('input').type('new').should('have.value', 'new');
  });
});
