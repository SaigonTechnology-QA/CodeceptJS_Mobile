# This a very simple automation framework to test Mobile using CodeceptJS FW, BDD and Appium

# Getting Started

## Setup and run locally

1. Install VSCode, NodeJS, Git

2. Download and install Java JDK 8:
- Create `JAVA_HOME` environment variables
- Add `JAVA_HOME` to Path: `%JAVA_HOME%\bin`

3.  Download and install Android Studio: [Link download](https://developer.android.com/studio)
- Open Android Studio then install all default components
- Create `ANDROID_HOME` environment variables for the path to : `Android\Sdk`
- Add `%ANDROID_HOME%\tools` to Path
- Add `%ANDROID_HOME%\platform-tools` to Path
- Add `%ANDROID_HOME%\emulator` to Path
- Create and start an emulator

4. Install Appium: `npm install -g appium`
- Start Appium by command: `appium`

5. Launch VSCode and open this project folder

6. Install Node packages:
- `npm install`
- Or manual install by commands: `npm install assert chai codeceptjs codeceptjs-assert codeceptjs-tesults env-cmd @faker-js/faker jsonpath webdriverio @testomatio/reporter --save`

7. Run test cases by the following command:
- Mobile test cases: `npm run mobile`

# Project structure
![Alt text](./assets/Project_Structure.png?raw=true "Project structure")

# Config for cloud reporting
![Alt text](./assets/Report.png?raw=true "Cloud reporting")

# Versioning
Version 1.0

# Author
Thich Nguyen - thich.nguyen@saigontechnology.com

# License

# Acknowledgments