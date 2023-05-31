const Helper = require('@codeceptjs/helper');

class Mobile extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

  async waitForMobileEle(selector, timeout = 30) {
    try {
      await this.helpers['Appium'].waitForElement(selector, timeout)
    } catch (e) {
      throw new Error(e)
    }
  }

  async waitForMobileEleVisible(selector, timeout = 30) {
    try {
      await this.helpers['Appium'].waitForElement(selector, timeout)
    } catch (e) {
      throw new Error(e)
    }
    await this.helpers['Appium'].waitForVisible(selector, timeout)
  }

  async waitForMobileEleInvisible(selector, timeout = 30) {
    try {
      await this.helpers['Appium'].waitForInvisible(selector, timeout)
    } catch (e) {
      throw new Error(e)
    }
  }

  async waitAndFillMobileEle(locator, value, timeout = 15) {
    await this.helpers['Appium'].waitForVisible(locator, timeout);
    await this.helpers['Appium'].fillField(locator, value);
  }

  async clickMobileButton(locator) {
    await this.helpers['Appium'].waitForVisible(locator);
    await this.helpers['Appium'].click(locator);
  }

  async waitAndFillMobileElement(selector, value, timeout = 60) {
    try {
      await this.helpers['Appium'].waitForVisible(selector, timeout);
    } catch (e) {
      throw new Error(e);
    }
    await this.helpers['Appium'].fillField(selector, value);
  }

  async waitAndClickToMobileElement(selector, timeout = 60) {
    try {
      await this.helpers['Appium'].waitForVisible(selector, timeout);
    } catch (e) {
      throw new Error(e);
    }
    await this.helpers['Appium'].click(selector);
  }

  async waitTimeMobile(time) {
    await this.helpers['Appium'].wait(time);
  }

  async getText(selector, timeout = 60) {
    try {
      await this.helpers['Appium'].waitForVisible(selector, timeout);
    } catch (e) {
      throw new Error(e);
    }
    return await this.helpers['Appium'].grabTextFrom(selector);
  }

  async scrollToBottom() {
    await this.helpers['Appium'].scrollPageToBottom();
  }

  async scrollToTop() {
    await this.helpers['Appium'].scrollPageToTop();
  }

  async scrollUpMobile(locator, startY = 80, endY = 20, loop = 3) {
    const driver = await this.helpers['Appium'].browser;
    const windowSize = await driver.getWindowSize();
    startY = windowSize.height * startY / 100;
    endY = windowSize.height * endY / 100;
    const startX = windowSize.width / 2;
    let nbEleFound = 0;
    let cnt = 0;

    while (nbEleFound == 0 && cnt < loop) {
      await this.helpers['Appium'].touchPerform([
        { action: 'press', options: { x: startX, y: startY } },
        { action: 'wait', options: { ms: 1000 } },
        { action: 'moveTo', options: { x: startX, y: endY } },
        { action: 'release' }
      ])
      nbEleFound = await this.getNumberOfPresentMobileElements(locator, 2)
      cnt++
    }

  }

  async getNumberOfPresentMobileElements(locator, timeout = 20) {
    const client = await this.helpers['Appium'].browser
    try {
      await client.setImplicitTimeout(timeout * 1000)
      const res = await client.$$(locator)
      return res && res.length
    } catch (e) {
      throw new Error(e)
    }
  }

}

module.exports = Mobile;
