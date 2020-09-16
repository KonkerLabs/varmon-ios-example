module.exports = {
    preset: "ts-jest",
    testRunner: "jest-circus/runner",
    testEnvironment: "../node_modules/varmon-jest/dist/JestEnvironment.js",
    reporters: [
        "default",
        "../node_modules/varmon-jest/dist/reporter/json-reporter.js",
    ],
    moduleNameMapper: {
        "^varmon-jest$": "varmon-jest/dist/utils/utils.js",
    },

    testEnvironmentOptions: {
        port: 24723,
        logLevel: "error",
        capabilities: {
            updatedWDABundleId: "br.com.inmetrics.varmon.WebDriverAgentRunner",
            platformName: "iOS",
            platformVersion: "13.6",
            deviceName: "KonkerLabs 8 Plus",
            udid: "57584dd0e3db38bb38f0ec3e69879a0ba2416ccd",
            app: "com.apple.calculator",

            automationName: "XCUITest",
            noReset: false,
            fullReset: false,
            newCommandTimeout: 180,
            autoAcceptAlerts: true

        },
    },

};


