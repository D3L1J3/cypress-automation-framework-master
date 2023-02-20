const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '7qnfim',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here

    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx,feature}",
    excludeSpecPattern: "cypress/e2e/{other,1-getting-started,2-advanced-examples}/**/*.js",  // how to ignore files
    baseUrl: "http://www.webdriveruniversity.com",
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 120000,
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true, // to clear screenshots folder before run
    video: false,
    videoUploadOnPasses: false,
    viewportHeight: 1080,
    viewportWidth: 1920,
    env: {
      first_name: "Sarah",
      webdriveruni_homepage: "http://www.webdriveruniversity.com"
    }
  },
});
