describe('Upload-download test',()=>
{
 
it("verify excel upload download",()=>
{
    const replaceNum = 45;
    const searchTextFruit = "Banana";
    const FilePath = Cypress.config("fileServerFolder")+"/cypress/downloads/download.xlsx"
    cy.visit("https://rahulshettyacademy.com/upload-download-test/index.html");
    cy.get("#downloadButton").click();
 
    cy.task('writeExcelTest',{searchText:searchTextFruit,replaceText:replaceNum,change:{rowChange:0,colChange:2},filePath:FilePath });//on task alwasys give that same arg name that you have given in config.js and we have made tast beacuse all the code cannot be run in brwoser it will run in node
    cy.get("#fileinput").selectFile(FilePath);//selectfile is to upload file but select file should have type = file attribute in it html tag 
    cy.contains(searchTextFruit).parent().parent().find("#cell-4-undefined")//we have written it will go to parent of that element and if we write again parent it will go to parent
    .should('have.text',replaceNum);
 
 
 
 
 
 
 
 
 
 
 
 
})
 
 
 
})