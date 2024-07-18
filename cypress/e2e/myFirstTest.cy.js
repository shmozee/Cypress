// install cypress, npm i cypress
// Assuming you have node.js installed


/// <reference types="cypress" />


// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
 
    context('with a checked task', () => {
      beforeEach(() => {

        cy.visit('www.google.co.uk')
      })

      it.only('my first test', () => {
        cy.viewport('iphone-6')
        cy.screenshot()
      })
  

    })
  })
  