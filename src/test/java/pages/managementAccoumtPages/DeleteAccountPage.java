package pages.managementAccoumtPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import runner.TestRunner;

import java.util.List;

public class DeleteAccountPage {

    @FindBy(tagName = "table")
    WebElement accountTable;

    public void clickDeleteButton(String userName) {
        List<WebElement> rows = accountTable.findElements(By.tagName("tr"));
        for (int i = 1; i < rows.size(); i++) {
            List<WebElement> cols = rows.get(i).findElements(By.tagName("td"));
            if (cols.get(0).getText().equals(userName)) {
                TestRunner.driver.findElement(By.xpath("//tbody/tr[" + i + "]/td[5]/a[2]")).click();
            }
        }
    }

    public boolean verifyDeleteSuccessfully(String userName) {
        List<WebElement> rows = accountTable.findElements(By.tagName("tr"));
        boolean check = false;
        for (int i = 1; i < rows.size(); i++) {
            List<WebElement> cols = rows.get(i).findElements(By.tagName("td"));
            if (cols.get(0).getText().equals(userName)) {
                check = true;
            }
        }
        return check;
    }

}
