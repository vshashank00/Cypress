class homepage{
    sendname(){
        return cy.get('div input[name ="name"]:nth-child(2)')
    }
    sendgender(){
        return cy.get('div select[id="exampleFormControlSelect1"]')
    }
    gotoshoppge(){
        return cy.get('li a').contains('Shop')
    }
     
}
export default homepage;