import { Given, When, Then } from '@wdio/cucumber-framework';

import LoginPage from '../pageobjects/login.page.ts'
import DashboardPage from '../pageobjects/dashboard.page.ts';

Given(/^I am on the (\w+) page$/, async (page) => {
    await LoginPage.isLoginButtonDisplayed()
});

When(/^I login with (\w+) account$/, async (account: string) => {
    await LoginPage.login(account)
});

Then(/^I should see the balance with the value (.*)$/, async (balance) => {
    await expect(DashboardPage.balanceText).toBeExisting();
    await expect(DashboardPage.balanceText).toHaveTextContaining(balance);
});

