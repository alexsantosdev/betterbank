package pages;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedConditions;
import tests.BaseClass;

public class TransferScreen extends BaseClass {

    AndroidDriver driver;

    public TransferScreen(AndroidDriver driver) {
        this.driver = driver;
    }

    public void enterAmount(int amount) {
        By input = AppiumBy.id("test:id/amount");

        wait.until(ExpectedConditions.visibilityOfElementLocated(input));

        WebElement editText = driver.findElement(input);

        editText.click();
        editText.sendKeys(String.valueOf(amount));
    }

    public Boolean shouldShowAlertMessage() {
        By alert = AppiumBy.id("test:id/alert_message");

        WebElement alertMessage = driver.findElement(alert);

        return alertMessage.isDisplayed();
    }

    public DashboardScreen handleGoBack() {
        By input = AppiumBy.id("test:id/goback_button");

        driver.findElement(input)
                .click();

        return new DashboardScreen(driver);
    }
}
