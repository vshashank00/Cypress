/// <reference types="Cypress"/>
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('frame',function(){
    it('Frame1',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.frameLoaded('#courses-iframe')
        cy.wait(5000)
        cy.iframe().find('li a[href*="mentorship"]:visible').click()

    })
})