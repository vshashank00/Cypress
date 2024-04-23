describe('My Fourth',function(){
    it('third',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
      
            cy.get('[name="courses"] tr td:nth-child(2)').each(($e1,index,$list)=>{
                if($e1.text()==='Master Selenium Automation in simple Python Language'){
                    cy.get('[name="courses"] tr td:nth-child(2)').eq(index).next().then(function(price){
                        cy.log(price.text())
                        const c=price.text()
                        expect(c).to.equal('25')
                        //so here we use then beacuse text is not cypress command so promise is not handled so we have to handled it by.then(confuse see lecture 36)
                       //we have use expect it is an assert should will not work beacuse it cy c is command
                    })
                }


              })
    })
})