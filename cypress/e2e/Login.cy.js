import LoginPage from '../pageobject/login_page';

const login = new LoginPage();

describe('Login Test', () => {
  it('Test 1 - Login Success', async () => {
    await cy.visit(login.url) 
    await login.inputLogin('standard_user', 'secret_sauce')
    await login.loginButtonClick()
    await login.assertUrl()
  })
  it('Test 2 - Login Failed', async () => {
    await cy.visit(login.url) 
    await login.inputLogin('standard_user1', 'secret_sauce')
    await login.loginButtonClick()
    await login.assertLoginFailed()
  })
  it('Test 3 - Login with null username and password', async () => {
    await cy.visit(login.url) 
    await login.loginButtonClick()
    await login.assertLoginFailed()
  })
})