const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'crv8fq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
