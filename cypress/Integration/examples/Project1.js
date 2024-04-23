import homepage from "./PageObject/Homepage"
import addproduct from"./PageObject/Productpage"
describe('project_testsuite',function(){
    before('run before all its only 1',function(){
        cy.fixture('example').then(function(data){
            this.data=data
            //we use then because we cannot use data of json directly
        })
    })
    it('testcase1',function(){
        cy.wait(2000)
        const hm=new homepage();//decalaring object in js
        const pr=new addproduct();
        cy.visit(Cypress.env('url')+"/angularpractice/")
        hm.sendname().type(this.data.name)
        hm.sendgender().select(this.data.gender)
        cy.get('div input[name ="name"]:nth-child(1)').should('have.value',this.data.name)
        cy.get('div input[name ="name"]:nth-child(2)').should('have.attr','minlength','2')
        hm.gotoshoppge().click()
        this.data.product.forEach(element => {
            // weh have use for each give the element inside the array and we have passed that in customize productname
                        cy.productname(element)
                    });

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
 //cy.log(sum)if we written like this cypress is intelligent so it will run in seq but js is not it will print before adding value 
cy.get('td button').contains('Checkout').click()   
cy.get('div input#country').type('ind')
cy.get('.suggestions ul li a').contains('India').click()   
cy.get('label[for="checkbox2"]').click()
cy.get('form input').click()
cy.get('.alert.alert-success.alert-dismissible').then(function(element){
    expect(element.text().includes('Success')).to.be.true
})

    })
})