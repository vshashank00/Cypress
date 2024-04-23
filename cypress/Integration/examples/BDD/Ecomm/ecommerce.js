import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
/// <reference types="Cypress"/>

import homepage from "../../PageObject/Homepage";
import addproduct from"../../PageObject/Productpage";
const hm=new homepage();
const pr=new addproduct();

Given('I go to ecomm page',() =>{
    cy.visit(Cypress.env('url')+"/angularpractice/")

})
When('I add items to cart',function(dataTable){//function instead => beacuse taking data from cucumber is not suppoted =>
    hm.gotoshoppge().click();
    // let product=["iphone X","Blackberry"]
//    this.data.product.forEach(function(element) {
//     cy.productname(element)
//       });
for(var i=0;i<2;i++){
    // console.log(dataTable.rawTable[1][i])
    cy.productname(dataTable.rawTable[1][i])
   


}
    
})
When('Verify the total',()=>{
    pr.checkout().click() 
    var sum=0
cy.get('tr>td:nth-child(4)>strong').each(($el,index,$list)=>{
    sum=sum+Number($el.text().split(" ")[1].trim())

 }).then(function(){
    cy.log(sum)//promise is resolved so it will not run berfore adding
    
 })
 cy.get('h3 strong').then(function(value){
    expect(Number(value.text().split(" ")[1].trim())).to.equal(sum)
 })
})

 Then('select the country submit and verify Thankyou',()=>
 {
    cy.get('td button').contains('Checkout').click()   
cy.get('div input#country').type('ind')
cy.get('.suggestions ul li a').contains('India').click()   
cy.get('label[for="checkbox2"]').click()
cy.get('form input').click()
cy.get('.alert.alert-success.alert-dismissible').then(function(element){
    expect(element.text().includes('Success')).to.be.true
})

 })
