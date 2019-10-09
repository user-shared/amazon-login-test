
module.exports = {
  
  open: () => browser.url('https://www.amazon.com'),
  accountListArrow: () => $('#nav-link-accountList .nav-arrow'),
  signinButton: () => $('#nav-flyout-ya-signin a'),
  signoutLink: () => $('#nav-item-signout')

}

