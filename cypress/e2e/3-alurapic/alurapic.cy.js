/* eslint-disable no-undef */
describe('Login e registro de usuarios no Alurapic', () => {
  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com');
  });

  it('verifica mensagens de validacao', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');;
    cy.contains('ap-vmessage', 'User name is required!').should('be.visible');;
    cy.contains('ap-vmessage', 'Password is required!').should('be.visible');;
  });

  it('verifica mensagem de email invalido', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="email"]').type('teste');
    cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');
  });

  it('verifica mensagem de nome completo invalido', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="fullName"]').type('d');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
  });

  it('verifica mensagem de nome do usuario invalido', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="userName"]').type('d');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 2').should('be.visible');
  });

  it('verifica mensagem de senha invalida', () => {
    cy.contains('a', 'Register now').click();
    cy.contains('button', 'Register').click();
    cy.get('input[formcontrolname="password"]').type('123');
    cy.contains('button', 'Register').click();
    cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');
  });
})