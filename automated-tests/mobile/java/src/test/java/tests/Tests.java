package tests;

import org.testng.annotations.Test;
import pages.LoginPage;

public class Tests extends BaseClass {

    @Test
    public void openBetterBankApp() {

    }

    @Test
    public void shouldLogIn() {
        LoginPage login = new LoginPage(driver);
        login.handleLogin("123456");
    }

    @Test
    public void shouldGoToTransferPage() {

    }
}
