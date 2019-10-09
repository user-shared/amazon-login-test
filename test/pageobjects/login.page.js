
module.exports = {
  usernameInput: () => $('#ap_email'),
  passwordInput: () => $('#ap_password'),
  titleText: () => 'Amazon Sign-In',
  continueButton: () => $("input#continue"),
  submitButton: () => $("input#signInSubmit"),
  otpInput: () => $("input#auth-mfa-otpcode"),
  otpSubmitButton: () => $("input#auth-signin-button"),

}
