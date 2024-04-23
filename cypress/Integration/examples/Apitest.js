describe('Api',()=>{
    it('first api',()=>{
        //          method      url
        cy.request('POST', 'http://216.10.245.166/Library/Addbook.php', {//body
            "name": "Learn Automation with Java",
            "isbn":"bcggsss",
            "aisle":"22500",
            "author":"John foe"
            }).then(function(response)//getting reponse and resolving promise
            {
            expect(response.body).to.have.property("Msg","successfully added")
            expect(response.status).to.eq(200)
            })
            })
    })
    