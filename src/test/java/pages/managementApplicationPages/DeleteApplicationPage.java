package pages.managementApplicationPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import runner.TestRunner;

import java.util.List;

public class DeleteApplicationPage {
    @FindBy(css = ".table")
    WebElement table;
    @FindBy(id = "btn-delete-app")
    WebElement btn_confirm_delete;

    public void clickDeleteApp(String appName) throws InterruptedException {
        List<WebElement> listTr = table.findElements(By.tagName("tr"));
        for (int i = 1; i < listTr.size(); i++) {
            List<WebElement> listTd = listTr.get(i).findElements(By.tagName("td"));
            if (listTd.get(0).getText().equals(appName)) {
                TestRunner.driver.findElement(By.xpath("//tbody/tr[" + i + "]/td[5]/a[2]")).click();
            }
            break;
        }
        Thread.sleep(2000);
    }

    public void confirmDelete() throws InterruptedException {
        btn_confirm_delete.click();
        Thread.sleep(2000);
    }

    public boolean verifyDeleteAppSuccess(String appName) {
        List<WebElement> listTr = table.findElements(By.tagName("tr"));
        for (int i = 1; i < listTr.size(); i++) {
            List<WebElement> listTd = listTr.get(i).findElements(By.tagName("td"));
            if (listTd.get(0).getText().equals(appName)) {
                return false;
            }
        }
        return true;
    }
}
