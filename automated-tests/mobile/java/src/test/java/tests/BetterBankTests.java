package tests;

import org.testng.Assert;
import org.testng.annotations.Test;
import pages.DashboardScreen;
import pages.LoginScreen;
import pages.TransferScreen;

public class BetterBankTests extends BaseClass {

    protected LoginScreen login;
    protected DashboardScreen dashboard;
    protected TransferScreen transfer;

    @Test(priority = 0)
    public void shouldLogIn() {
        login = new LoginScreen(driver);
        login.handleLogin("123456");
    }

    @Test(priority = 1)
    public void shouldHideBalanceContent() {
        dashboard = new DashboardScreen(driver);
        Assert.assertEquals("*****", dashboard.handleHideBalanceContent());
    }

    @Test(priority = 2)
    public void shouldGoToTransferScreen() {
        transfer = dashboard.handleGoToTransferScreen();
    }

    @Test(priority = 3)
    public void shouldEnterAValueGreaterThanAllowed() {
        transfer.enterAmount(400);
        Assert.assertTrue(transfer.shouldShowAlertMessage());
    }

    @Test(priority = 4)
    public void shouldGoBackToDashboard() {
        dashboard = transfer.handleGoBack();
    }

    @Test(priority = 5)
    public void shouldSignOut() {
        login = dashboard.handleSignOut();
    }
}
