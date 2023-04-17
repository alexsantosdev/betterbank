package pages;

import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.pagefactory.AndroidFindBy;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

public class LoginPage {

    AndroidDriver driver;

    public LoginPage(AndroidDriver driver) {
        this.driver = driver;
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }

    @AndroidFindBy(className = "")
    private WebElement accountElement;
    @AndroidFindBy(className = "")
    private WebElement logInButtonElement;

    public void handleLogin(String account) {
        typeAccount(account);
        clickLogin();
    }

    private void typeAccount(String account) {
        accountElement.sendKeys(account);
    }

    private void clickLogin() {
        logInButtonElement.click();
    }
}
