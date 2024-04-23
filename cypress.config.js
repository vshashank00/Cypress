const { defineConfig } = require("cypress");
const excelToJson = require('convert-excel-to-json');
const ExcelJs =require('exceljs');

const fs = require('fs');
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");
const {
  preprocessor,
} = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  require('cypress-mochawesome-reporter/plugin')(on);

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", preprocessor(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  
  on('task',{
    excelcovert(filepath){
      const result = excelToJson({
        source: fs.readFileSync(filepath)//i have taken this code https://www.npmjs.com/package/convert-excel-to-json
       
    });
    return result
    }

  
  })
  on('task',{
    async writeExcelTest({searchText,replaceText,change,filePath})//if there were on arg we can pss without { } but there are more than one so pass in {}
{
    
  const workbook = new ExcelJs.Workbook();
  await workbook.xlsx.readFile(filePath);
  const worksheet = workbook.getWorksheet('Sheet1');
  const output= await readExcel(worksheet,searchText);//we are calling read excel function
 
  const cell = worksheet.getCell(output.row,output.column+change.colChange);
  console.log(replaceText)
  cell.value = replaceText;
  return await workbook.xlsx.writeFile(filePath).then(()=>{
    return true;

  })
 
}
  })

  return config;
}

async function readExcel(worksheet,searchText)
{
    let output = {row:-1,column:-1};
    worksheet.eachRow((row,rowNumber) =>
    {
          row.eachCell((cell,colNumber) =>
          {
              if(cell.value === searchText)
              {
                  output.row=rowNumber;
                  output.column=colNumber;
              }
  
  
          }  )
    
    })
    return output;//returnig col and row nuber and in for of object(in java we call hashmap)
}

module.exports = defineConfig({
  
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  "env": {
    url : 'https://rahulshettyacademy.com'
  },
  projectId: "h6qxss",

  e2e: {    
    setupNodeEvents,
    specPattern:'cypress/Integration/examples/*.js',
    chromeWebSecurity:false
  
    
    
  },


});
