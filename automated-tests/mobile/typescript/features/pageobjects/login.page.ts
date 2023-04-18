import { ChainablePromiseElement } from 'webdriverio'

import Page from './page.ts'

class LoginPage extends Page {
    constructor() {
        super('~Login-screen')
    }

    public get inputAccount () {
        return $('~test:id/user_account');
    }

    public get btnSubmit () {
        return $('~test:id/login_button');
    }

    async isLoginButtonDisplayed() {
        return (await this.btnSubmit).isDisplayed()
    }

    public async login (account: string) {
        await this.inputAccount.setValue(account);
        await this.btnSubmit.click();
    }
}

export default new LoginPage();
