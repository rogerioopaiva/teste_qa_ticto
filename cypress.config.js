const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");

async function setupNodeEvents(on, config) {
    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    on(
        "file:preprocessor",
        createBundler({
            plugins: [createEsbuildPlugin.default(config)],
        })
    );

    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
    // implement node event listeners here
}

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://qa-test.ticto.io/',
        viewportWidth: 1920,
        viewportHeight: 1080,
        specPattern: "cypress/e2e/features/*.feature",
        supportFile: false,
        chromeWebSecurity: false,
        defaultCommandTimeout: 8000,
        setupNodeEvents,
    },
});
