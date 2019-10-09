require('dotenv-safe').config();

const assert = require('assert')
const otplib = require('otplib');

const homePage = require('../pageobjects/home.page');
const loginPage = require('../pageobjects/login.page');

const username = process.env.USERNAME;
const password = process.env.PASSWORD;
const secret = process.env.OTP_SECRET;

describe('Amazon.com Login', () => {

  it('should be able to login', () => {
	
    homePage.open();

    // expand the fly out.
    homePage.accountListArrow().click();

    if (homePage.signinButton().isExisting()) {
      // click the sign-in button.
      homePage.signinButton().click();
    }

    loginPage.usernameInput().setValue(username);
       
    let title = browser.getTitle();
	  assert.strictEqual(title, loginPage.titleText());
	
    loginPage.continueButton().waitForEnabled();
    loginPage.continueButton().click();
        
    loginPage.passwordInput().setValue(password);

	
    loginPage.submitButton().waitForEnabled();
    loginPage.submitButton().click();

    let token = otplib.authenticator.generate(secret);
    loginPage.otpInput().setValue(token);
    
    loginPage.otpSubmitButton().waitForEnabled();
    loginPage.otpSubmitButton().click();

    homePage.accountListArrow().click();
    assert(homePage.signoutLink().isExisting(), true);
  });




});
