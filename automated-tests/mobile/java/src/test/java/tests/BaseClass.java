package tests;

import io.appium.java_client.android.AndroidDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterTest;
import org.testng.annotations.BeforeTest;

import java.net.MalformedURLException;
import java.net.URL;

public class BaseClass {

    AndroidDriver driver;

    @BeforeTest
    public void setup() throws MalformedURLException {
        DesiredCapabilities capabilities = new DesiredCapabilities();
        capabilities.setCapability("appPackage", "br.com.betternow.");

        driver = new AndroidDriver(new URL("http://127.0.0.1:4841/wd/hub"), capabilities);
    }

    @AfterTest
    public void teardown() {
        driver.close();
        driver.quit();
    }
}
