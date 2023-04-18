import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.ts'
import SecurePage from '../pageobjects/secure.page.ts';

Given(/^I am on the (\w+) page$/, async (page) => {
    await LoginPage.isLoginButtonDisplayed()
});

When(/^I login with (\w+)$/, async (account: string) => {
    await LoginPage.login(account)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

