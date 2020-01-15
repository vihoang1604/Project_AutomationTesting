package pages.managementApplicationPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import runner.TestRunner;

import java.util.List;

import static tests.PageProvider.getCommonPage;

public class EditApplicationPage {
    @FindBy(css = ".table")
    WebElement table;

    @FindBy(css = "div.row:nth-child(4) > div:nth-child(1) > form:nth-child(1) > div:nth-child(4) > input:nth-child(1)")
    WebElement appName;

    @FindBy(css = "div.row:nth-child(4) > div:nth-child(1) > form:nth-child(1) > div:nth-child(6) > input:nth-child(1)")
    WebElement sessionNumber;

    @FindBy(css = "div.form-group:nth-child(8) > select:nth-child(1)")
    WebElement userBase_select;

    @FindBy(css = "div.form-actions:nth-child(9) > button:nth-child(1)")
    WebElement btn_update;

    public void clickEditApp(String appName) throws InterruptedException {
        getCommonPage().scrollUp();
        List<WebElement> listTr = table.findElements(By.tagName("tr"));
        for (int i = 1; i < listTr.size(); i++) {
            List<WebElement> listTd = listTr.get(i).findElements(By.tagName("td"));
            if (listTd.get(0).getText().equals(appName)) {
                TestRunner.driver.findElement(By.xpath("//tbody/tr[" + i + "]/td[5]/a[1]")).click();
            }
            break;
        }
        Thread.sleep(1000);
    }

    public void editApplicationInformation(String appNameInput, String sessionInput, String userBaseInput) throws InterruptedException {
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

    public void clickUpdate() throws InterruptedException {
        btn_update.click();
        Thread.sleep(1000);
    }
}
