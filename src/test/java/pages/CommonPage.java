package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;
import runner.TestRunner;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class CommonPage {

    @FindBy(xpath = "//*[@id=\"side-menu\"]/li[14]/a/span[1]")
    WebElement managementTab;

    @FindBy(xpath = "//*[@id=\"page-wrapper\"]/div[1]/nav/div/a")
    WebElement topButton;

    @FindBy(xpath = "//*[@id=\"side-menu\"]/li[14]/ul/li[1]/a")
    WebElement application_sidebar;

    @FindBy(css = ".sign-out-button")
    WebElement btn_logout;

    @FindBy(css = ".table")
    WebElement table;

    @FindBy(xpath = "//*[@id=\"side-menu\"]/li[14]/ul/li[2]/a")
    WebElement loginAccountTab;

    @FindBy(tagName = "table")
    WebElement accountTable;

    //click scroll down
    public void scrollDown() throws InterruptedException {
        ((JavascriptExecutor) TestRunner.driver).executeScript("arguments[0].scrollIntoView(true);", managementTab);
        managementTab.click();
        Thread.sleep(1000);
    }

    //click application tab
    public void clickApplicationSideBar() throws InterruptedException {
        scrollDown();
        application_sidebar.click();
        Thread.sleep(1000);
    }

    //scroll up
    public void scrollUp() throws InterruptedException {
        ((JavascriptExecutor) TestRunner.driver).executeScript("arguments[0].scrollIntoView(true);", topButton);
        Thread.sleep(1000);
    }

    //logout web site
    public void logOut() throws InterruptedException {
        btn_logout.click();
        Thread.sleep(1000);
    }

    //close pop up
    public void closeAlertPopup() throws InterruptedException {
        Thread.sleep(2000);
        TestRunner.driver.switchTo().alert().accept();
    }

    //verify table application
    public void verifyDataTableApplication(String appNameInput, String sessionInput, String userBaseInput, boolean status) {
        boolean check = false;
        List<WebElement> listTr = table.findElements(By.tagName("tr"));
        for (int i = 1; i < listTr.size(); i++) {
            List<WebElement> listTd = listTr.get(i).findElements(By.tagName("td"));
            if (listTd.get(0).getText().equals(appNameInput) && listTd.get(2).getText().equals(sessionInput) && listTd.get(3).getText().equals(userBaseInput)) {
                check = true;
            }
        }
        if (status) {
            if (!check) Assert.assertEquals(1, 0);
        } else {
            if (check) Assert.assertEquals(1, 0);
        }
    }

    // click tab login account
    public void clickLoginAccountTab() throws InterruptedException {
        Thread.sleep(1000);
        loginAccountTab.click();
    }

    // get userName
    public String userName() {
        List<WebElement> rows = accountTable.findElements(By.tagName("tr"));
        ArrayList<String> userName = new ArrayList<String>();
        for (int i = 1; i < rows.size(); i++) {
            List<WebElement> cols = rows.get(i).findElements(By.tagName("td"));
            if (!cols.get(0).getText().equals("admin")) {
                userName.add(cols.get(0).getText());
            }
        }
        Random rand = new Random();
        int ind = rand.nextInt(userName.size());
        return userName.get(ind);
    }

    //verify table account
    public boolean verifyDataTableAccount(String firstName, String lastName, String role, String userName, String password) {
        List<WebElement> rows = accountTable.findElements(By.tagName("tr"));
        boolean check = false;
        for (int i = 1; i < rows.size(); i++) {
            List<WebElement> cols = rows.get(i).findElements(By.tagName("td"));
            if (cols.get(0).getText().equals(firstName) && cols.get(1).getText().equals(lastName) && cols.get(2).getText()
                    .equals(role) && cols.get(3).getText().equals(userName) && cols.get(4).getText().equals(password)) {
                check = true;
            }
        }
        return check;
    }
}
