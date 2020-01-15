package pages.managementApplicationPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.util.List;

import static tests.PageProvider.getCommonPage;

public class AddApplicationPage {

    @FindBy(css = ".table-responsive > button:nth-child(1)")
    WebElement btn_addApp;

    @FindBy(xpath = "//*[@id=\"appName\"]")
    WebElement appName;

    @FindBy(id = "sessionExpiration")
    WebElement sessionNumber;

    @FindBy(id = "userBase")
    WebElement userBase_select;

    @FindBy(css = "div.form-actions:nth-child(7) > button:nth-child(1)")
    WebElement btn_create;


    public void clickAddApp() throws InterruptedException {
        getCommonPage().scrollUp();
        btn_addApp.click();
    }

    public void setApplicationInformation(String appNameInput, String sessionInput, String userBaseInput) throws InterruptedException {
        this.appName.clear();
        if (!appNameInput.equals("")) {
            this.appName.sendKeys(appNameInput);
            Thread.sleep(1000);
        }
        this.sessionNumber.clear();
        if (!sessionInput.equals("")) {
            this.sessionNumber.sendKeys(sessionInput);
            Thread.sleep(1000);
        }
        if (!userBaseInput.equals("")) {
            userBase_select.click();
            Thread.sleep(1000);
            List<WebElement> listUserBase = userBase_select.findElements(By.tagName("option"));
            for (WebElement userbase : listUserBase) {
                if (userbase.getText().toLowerCase().equalsIgnoreCase(userBaseInput)) {
                    userbase.click();
                    Thread.sleep(1000);
                    break;
                }
            }
        }
    }

    public void clickCreate() throws InterruptedException {
        btn_create.click();
        Thread.sleep(1000);
    }
}


