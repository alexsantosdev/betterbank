package tests;

import io.appium.java_client.Setting;
import io.appium.java_client.android.AndroidDriver;
import io.appium.java_client.android.options.UiAutomator2Options;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import java.net.MalformedURLException;
import java.net.URL;
import java.time.Duration;
import java.util.EnumMap;

public class BaseClass {
    protected static AndroidDriver driver;
    protected static WebDriverWait wait;

    @BeforeTest
    public void setup() throws MalformedURLException {
        UiAutomator2Options options = new UiAutomator2Options();
        options.setAppPackage("br.com.betternow.betterbank");
        options.setAppActivity("br.com.betternow.betterbank.MainActivity");
        driver = new AndroidDriver(new URL("http://127.0.0.1:4883"), options);
        wait = new WebDriverWait(driver, Duration.ofSeconds(10));

        EnumMap<Setting, Object> myConfig = new EnumMap<Setting, Object>(Setting.class);
        myConfig.put(Setting.WAIT_FOR_IDLE_TIMEOUT, 500);
        driver.setSettings(myConfig);
    }

    @AfterTest
    public void teardown() {
        if (driver != null) {
            driver.quit();
        }
    }
}