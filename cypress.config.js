// cypress.config.js

const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173', // Vite dev server
    setupNodeEvents(on, config) {
      // implement node event listeners if needed
      return config;
    },
  },
  video: false,
  screenshotOnRunFailure: true,
});
