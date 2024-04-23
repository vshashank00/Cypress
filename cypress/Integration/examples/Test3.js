describe('My third',function(){
    it('third',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click();
        cy.origin('https://www.qaclickacademy.com/',function(){
            cy.get('#navbarSupportedContent a[href*="contact"]').click()
            
        })
    })
})