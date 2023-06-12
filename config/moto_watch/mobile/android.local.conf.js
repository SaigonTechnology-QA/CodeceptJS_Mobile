const path = './../../../'
require(path + 'local_data')

exports.config = {
  output: path + 'output',
  helpers: {
    Appium: {
        host: '0.0.0.0',
        path: '/wd/hub',
        port: 4723,
        platform: 'android',
        automationName: 'UIAutomator2',
        desiredCapabilities: {
          appPackage: 'com.ebuynow.smartwatch',
          appActivity: 'globics.terralogic.com.MainActivity',
          noReset: true,
          fullReset: false,
          deviceName: 'emulator-5554',
          platformName: 'Android',
          platformVersion: '13.0',
          newCommandTimeout: 60
        }
      },
    Mobile: {
      require: path + 'helper/mobile_helper.js',
    }
  },
  include: {
    I: path + 'steps_file.js',
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: path + 'features/**/*.feature',
    steps: path + 'step_definitions/**/*.js',
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {},
    allure: {
      enabled: false,
      outputDir: './auto-generated/allure-results',
    },
    tesults: {
      enabled: false,
      require: 'codeceptjs-tesults',
      target: process.env.TargetToken,
      },
    testomatio: {
      enabled: true,
      require: '@testomatio/reporter/lib/adapter/codecept',
      apiKey: process.env.TESTOMATIO,
    }
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
    pattern: 'wait.*',
    timeout: 0
  },
  {
    pattern: 'amOnPage',
    timeout: 0
  }
  ],
  tests: './*_test.js',
  name: 'CodeceptJSProject'
}