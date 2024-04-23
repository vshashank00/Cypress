/// <reference types="Cypress"/>

describe('mocking',()=>{
    it('first mocking',()=>{
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/')
        // cy.intercept({
        //     method: 'GET',
        //     url: 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'//which api needs to mock
        //     },
        //     {
        //     statusCode : 200,
        //     body: [{
        //     "book_name": "RestAssured with Java",//which data to be send 
        //     "isbn": "RSU",
        //     "aisle": "2301" }]
        //     }).as('bookretrievals')
        //     cy.get("button[class='btn btn-primary']").click()
        //     cy.wait('@bookretrievals').then(({request,response})=>{

        //         cy.get('tr').should('have.length',response.body.length+1)
        //     })
        //     //in this it wait for @bookretrievals to complete mocking
        //     cy.get('p').should('have.text','Oops only 1 Book available')




    cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
    (req)=>
    {
    req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra"//we are replacing above url with this
 
    req.continue((resback)=>//collecting responceback and epect page should give 403 because that is diff api if it give the result security issue
    {
       // expect(res.statusCode).to.equal(403)
    })
 }
 ).as("dummyUrl")
 
 cy.get("button[class='btn btn-primary']").click()
 cy.wait('@dummyUrl')
 
})


    })

