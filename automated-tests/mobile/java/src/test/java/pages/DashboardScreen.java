package pages;

import io.appium.java_client.AppiumBy;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.pagefactory.AppiumFieldDecorator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import tests.BaseClass;

public class DashboardScreen extends BaseClass {

    AndroidDriver driver;

    public DashboardScreen(AndroidDriver driver) {
        this.driver = driver;
        PageFactory.initElements(new AppiumFieldDecorator(driver), this);
    }

    public String handleHideBalanceContent() {
        By text = AppiumBy.id("test:id/user_balance");
        By button = AppiumBy.id("test:id/hide_content");

        wait.until(ExpectedConditions.visibilityOfElementLocated(text));

        WebElement balanceText = driver.findElement(text);
        WebElement hideButton = driver.findElement(button);

        hideButton.click();

        return balanceText.getText();
    }

    public TransferScreen handleGoToTransferScreen() {
        By button = AppiumBy.id("test:id/transfer_button");
        WebElement transferButton = driver.findElement(button);

        transferButton.click();

        return new TransferScreen(driver);
    }

    public LoginScreen handleSignOut() {
        By touchable = AppiumBy.id("test:id/signout_button");

        WebElement signOutButton = driver.findElement(touchable);

        signOutButton.click();

        return new LoginScreen(driver);
    }
}
