describe('secondTest',function(){
    it('test2',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')
        let c=1
        cy.get('input[type="checkbox"]').filter('input[name*="checkBox"]').each(($e1,index,$list)=>{
           cy.wrap ($e1).check().should('be.checked').and('have.value','option'+c)
           c++;

        })
        cy.get('select').select('option2').should('have.value','option2')
        cy.get('fieldset #autocomplete').type('ind')
        cy.get('li').find('div.ui-menu-item-wrapper').each(($e1,index,$list)=>{
            if($e1.text()===('India')){
                cy.wrap($e1).click()
            }
            
 
         })

    })

})