// /// <reference types="Cypress"/>
// / <reference types="cypress-iframe" />
// // import 'cypress-iframe'
// describe('calender',function(){
//     it('cal',function(){

//         cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/offers')
//         cy.get('button svg[class="react-date-picker__calendar-button__icon react-date-picker__button__icon"]').click()
//         cy.get('button span').then(function(month){
//             const c= month.text()
//             if(!c.includes('January 2027')){
//                 cy.get('button span').click()
//                 cy.get('button span').then(function(year){
//                 if(!year.text().includes('2028')){
//                     cy.get('button span').click()
//                     cy.get('div button[class="react-calendar__tile react-calendar__decade-view__years__year"]').each(($e1,index,$list)=>{
//                         if($e1.text()==='2028'){
//                             cy.wrap($e1).click()
//                             cy.get('div button abbr').each(($e1,index,$list)=>{
//                                 if($e1.text()==='February'){
//                                     cy.wrap($e1).click()
//                                     cy.get('div button abbr').each(($e1,index,$list)=>{
//                                         if($e1.text()==='27'){
//                                             cy.wrap($e1).click()}
//                                     })
//                                 }

//                             })
                            
//                         }

//                     })

//                 }})

                
                
//             }
//         })
//         cy.get('div div[class="react-date-picker__inputGroup"]').then(function(verify){
//             cy.log(verify.text())

//         })
//     })
// })
describe('Calendar test',()=>
{
 
    it('Verify date selection',()=>{
 
        const monthNumber = "6";
        const date = "15";
        const year = "2027";
        const expectedList = [monthNumber,date,year];
 
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers");
        cy.wait(5000)
        cy.get(".react-date-picker__inputGroup").click();
 
        cy.get(".react-calendar__navigation__label").click();
        cy.get(".react-calendar__navigation__label").click();
        cy.contains("button",year).click();
        cy.get(".react-calendar__year-view__months__month").eq(Number(monthNumber)-1).click();
        cy.contains("abbr",date).click();//in contains just provide partial text name and which text to slect it will selet y
 
        //Assertion
        cy.get(".react-date-picker__inputGroup__input").each(($el,index)=>
        {
            cy.wrap($el).invoke('val').should('eq',expectedList[index]);
            //eq means equal in assertion expeted list is declare able and index will increase when el move
            
        }
        
        
        
        
        )     
 
 
 
 
 
 
 
 
 
 
 
 
 
 
    })
 
 
 
 
 
 
 
})