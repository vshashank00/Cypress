/// <reference types="Cypress"/>
describe('My first testSuite',function(){
    it('My firsttest case',function(){
        //code of testcase
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.get('.product:visible').should('have.length',4)
        // cy.get('.products').find('.product').eq(1).contains('ADD TO CART').click();
        cy.get('.products').find('.product').each(($e1,index,$list)=>{


            if($e1.find('h4.product-name').text().includes('Carrot')||$e1.find('h4.product-name').text().includes('Capsicum')){
                cy.wrap($e1).find('button').click()
            }

        })
        cy.get('.cart-icon').find('img').click();
        cy.get('div.action-block').find('button').contains('PROCEED').click()
        // cy.get('div.action-block').find('button:visible').then(function(element){
        //     if(element.text().includes('PROCEED TO CHECKOUT')){
        //         cy.wrap(element).click();
        //     }
        // })
        cy.contains('Place Order').click()
        // cy.get('button').each(($e1,index,$list)=>{
        //     cy.log($e1.text())
        //     if($e1.text().includes('Place Order')){
        //         cy.wrap($e1).click();
        //     }

        // })

    })

})

// / <reference types="Cypress" />
 
// describe('My First Test Suite', function() 
// {
 
// it('My FirstTest case',function() {
 
 
// cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
// cy.get('.search-keyword').type('ca')
// cy.wait(2000)
// //selenium get hit url in browser, cypress get acts like findElement of selenium
// cy.get('.product').should('have.length',5)
// cy.get('.product:visible').should('have.length',4)
// //Parent child chaining
// cy.get('.products').as('productLocator')
// cy.get('@productLocator').find('.product').should('have.length',4)
// cy.get(':nth-child(3) > .product-action > button').click()
// cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function()
// {
//     console.log('sf')
// })
 
// cy.get('@productLocator').find('.product').each(($el, index, $list) => {
 
// const textVeg=$el.find('h4.product-name').text()
// if(textVeg.includes('Cashews'))
// {
// $el.find('button').click()
// }
// })
