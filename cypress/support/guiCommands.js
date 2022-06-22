/* eslint-disable no-undef */
Cypress.Commands.add('login', (userName, password) =>{
  cy.get('input[formcontrolname="userName"]').type(userName);
  cy.get('input[formcontrolname="password"]').type(password);
  cy.contains('button', 'login').click();
})