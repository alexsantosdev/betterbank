package pages;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import tests.BaseClass;

public class LoginScreen extends BaseClass {
    AndroidDriver driver;

    public LoginScreen(AndroidDriver driver) {
        this.driver = driver;
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }

    public void handleLogin(String account) {
        By input = AppiumBy.id("test:id/user_account");
        By button = AppiumBy.id("test:id/login_button");

        wait.until(ExpectedConditions.visibilityOfElementLocated(input));

        WebElement editText = driver.findElement(input);
        WebElement submitButton = driver.findElement(button);

        editText.click();
        editText.sendKeys(account);

        submitButton.click();
    }
}
