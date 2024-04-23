describe('My five',function(){
    it('five',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('.mouse-hover-content').invoke('show').find('a').contains('Top').click({force:true})//invoke will invoke jquerry command jquery have show command that show invisble element
    
        cy.contains('Top').click({force:true})//forcefully click non vivible element
    })
})