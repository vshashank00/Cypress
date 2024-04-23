/// <reference types="Cypress"/>

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
cy.contains('Click To Download Order Details in Excel').click()

 
// const result = excelToJson({
//     source: fs.readFileSync(Cypress.config('fileServerFolder')+"/cypress/downloads/order-invoice_vshashank1.xlxs")//i have taken this code https://www.npmjs.com/package/convert-excel-to-json
// });
const path=Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_vshashank1.xlsx";

cy.task('excelcovert',path).then(function(result){
    cy.log(result.data[1].A);
      expect(productName).to.equal(result.data[1].B);//getting product name
      /*data
: 
Array(2)
0
: {A: 'Invoice Number', B: 'Product Name', C: 'Product Description', D: 'Product Price', E: 'Address', …}
1: {A: '661d71a9a86f8f74dcc27c87', B: 'ADIDAS ORIGINAL', C: 'Adidas shoes for Men', D: '31500', E: 'India', …}
length
: 
2
*/
    // console.log(result)
})
cy.readFile(path).then(function(text)
{
  expect(text).to.include(productName);//it returns tesxt ypu can use this if younjust want to know some thing is present or not
})
 
})


    })
