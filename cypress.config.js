const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://gallery-app.vivifyideas.com/",
    env: {
      testUserEmail: "bajicnemanja32@gmaill.com",
      testUserPassword: "nemanja94",
    },
  },
});
