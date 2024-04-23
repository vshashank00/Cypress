beforeEach(function ()
{//before each run for each and every test while before run only once
   cy.fixture('example').then(function(data){
            this.data=data
        })
});