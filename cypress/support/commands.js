// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add('productname', (product1) => { 
    cy.get('h4.card-title').each(($el,index,$list)=>{
        console.log(product1)
        if($el.text().includes(product1)){
            cy.get('div button:visible').eq(index).click()

        }
    })
 })
 Cypress.Commands.add('Logincall',()=>{
    cy.request("POST","https://rahulshettyacademy.com/api/ecom/auth/login",{"userEmail":"vshashank1@hotmail.com","userPassword":"Shashank@1"}).then((response)=>{
        expect(response.status).to.eq(200)
        Cypress.env('token',response.body.token)//we are setting env variable so that token will be available for all

    })


 })

//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })