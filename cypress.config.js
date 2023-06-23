const cucumber=require ('cypress-cucumber-preprocessor').default
const cypress = require("cypress");
const { defineConfig } = require("cypress");
const { default: preprocessor } = require("cypress-cucumber-preprocessor");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor',cucumber())
    },
    specPattern:"cypress/e2e/features/*.feature",
  },
 });
 
