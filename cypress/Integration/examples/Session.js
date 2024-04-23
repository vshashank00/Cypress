/// <reference types="Cypress"/>
const neatCsv = require('neat-csv')

let productName
let orderid

describe('Seesionlogin',()=>{
    it('by pass lonin using token ',async()=>{
        cy.Logincall().then(()=>{
            cy.visit('https://rahulshettyacademy.com/client',{
                onBeforeLoad:function(window){
                    window.localStorage.setItem('token',Cypress.env('token'))

                }

            })

        })//this is custom method which present in command .js and this is custom command so we whave to handle promise and we have bypess the login page
cy.get('.card-body:visible').each(($el,index,$list)=>{
    if($el.text().includes('ADIDAS')){
        productName =  $el.text().split('$')[0].trim();
     cy.wrap( $el).get('.card-body>button:last-of-type').eq(index).click()
    }

})
cy.contains('button','Cart').click()
cy.contains('button','Checkout').click()
cy.get('input[placeholder="Select Country"]').type('ind')
cy.get('section>button').each(($el,index,$list)=>{
    if($el.text()===(' India')){
        cy.wrap($el).click()
    }

})
cy.get('div>a[class*="ng-star-inserted"]').click()
cy.get('tr:nth-child(3)>td>label').then((element)=>{
    console.log(element.text().split(' '))
    orderid =element.text().split(" ")[2].trim()

})
cy.contains('Click To Download Order Details in CSV').click()
cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_vshashank1.csv").then(async(text)=>{
    const c= await neatCsv(text)//we use await beacuse in documentation it is written that we have to use and with async we should use async at function level
    console.log(c)
    const actualProductCSV = c[0]["Product Name"]//we will get reposne like below so we are accesing like that
    const orderidactual=c[0]["Invoice Number"]
    /*[0]
: 
Address: "India"
Invoice Number: "661d2821a86f8f74dcc2235e"
Ordered By: "vshashank1@hotmail.com"
Product Description: "Adidas shoes for Men"
Product Name: "ADIDAS ORIGINAL"
Product Price: "31500"
*/
    expect(productName).to.equal(actualProductCSV)
    expect(orderid).to.equal(orderidactual)

})//it returns tesxt


    })
})