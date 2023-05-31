const { I } = inject();
const loginPage = require('../../../pages/moto_watch/mobile/login')

Given('Mobile app login with user and password', async () => {
  await loginPage.loginWithUsernameAndPassword(process.env.APP_USERNAME, process.env.APP_PASSWORD);
});