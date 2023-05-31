const { I } = inject();

const locator = require('./locator')
const commonLocator = require('../../mobile/common/locator')

class MobileLoginPage {

  async loginWithUsernameAndPassword(username, password) {
    const allowNotiBtnShown = await I.grabNumberOfVisibleElements(locator.pageLogin.allowNotificationBtn);
    if (allowNotiBtnShown) {
      await I.waitAndClickToMobileElement(locator.pageLogin.allowNotificationBtn);
    }
    await I.waitAndClickToMobileElement(locator.pageLogin.signInBtn);
    await I.waitAndFillMobileElement(locator.pageLogin.emailTextBox, username);
    await I.waitAndFillMobileElement(locator.pageLogin.passwordTextBox, password);
    await I.waitAndClickToMobileElement(locator.pageLogin.processBtn);
    const allowBtnShown = await I.grabNumberOfVisibleElements(locator.pageLogin.allowBtn);
    if (allowBtnShown) {
      await I.waitAndClickToMobileElement(locator.pageLogin.allowBtn);
    }
    await I.waitForMobileEleVisible(commonLocator.imageProfile);
    await I.waitForMobileEleInvisible(commonLocator.iconLoading);
  }

}

module.exports = new MobileLoginPage();