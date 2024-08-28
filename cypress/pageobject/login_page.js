class LoginPage {

    get url() {
        return 'https://www.saucedemo.com/'
    }
    get username() {
        return cy.get('#user-name')
    }
    get password() {
        return cy.get('#password')
    }
    get loginButton() {
        return cy.get('#login-button')
    }
    get urlAssert() {
        return 'https://www.saucedemo.com/inventory.html'
    }
    get errorMessageFailed () {
        return cy.get('[class="error-message-container error"]')
    }
    // action 
    async inputLogin (username, password) { 
        await this.username.type(username)
        await this.password.type(password)       
    }
    async loginButtonClick() {
        await this.loginButton.click()
    }

    // assertion
    async assertLoginFailed (){
        await this.errorMessageFailed.should('be.visible')
    }

    async assertUrl() {
        await cy.url().should('include', this.urlAssert)
    }   

}

export default LoginPage