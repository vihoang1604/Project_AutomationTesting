package pages.managementAccoumtPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;
import runner.TestRunner;

import java.util.List;

public class AddAccountPage {

    @FindBy(xpath = "//*[@id=\"page-wrapper\"]/div[2]/div/div/div/div/button")
    WebElement addAccountButton;

    @FindBy(xpath = "(//input[contains(@id,'firstName')])[1]")
    WebElement firstName;

    @FindBy(xpath = "(//input[contains(@id,'lastName')])[1]")
    WebElement lastName;

    @FindBy(xpath = "(//select[contains(@id,'role')])[1]")
    WebElement roleSelect;

    @FindBy(xpath = "(//input[contains(@id,'username')])[1]")
    WebElement userName;

    @FindBy(xpath = "(//input[contains(@id,'password')])[1]")
    WebElement password;

    @FindBy(xpath = "//*[@id=\"page-wrapper\"]/div[3]/div/form/div[6]/button")
    WebElement createButton;

    @FindBy(tagName = "table")
    WebElement accountTable;

    public void getClickAddAccount() {
        addAccountButton.click();
    }

    public void getInformationAddAccount(String inputFirstName, String inputLastName, String inputRole, String inputUserName, String inputPassword) {
        this.firstName.clear();
        if (!inputFirstName.equals("")) {
            this.firstName.sendKeys(inputFirstName);
        }
        this.lastName.clear();
        if (!inputLastName.equals("")) {
            this.lastName.sendKeys(inputLastName);
        }
        roleSelect.click();
        List<WebElement> roleList = roleSelect.findElements(By.tagName("option"));
        for (WebElement user : roleList) {
            if (user.getText().equals(inputRole)) {
                Select userSelects = new Select(roleSelect);
                userSelects.selectByVisibleText(inputRole);
            }
        }
        this.userName.clear();
        if (!inputUserName.equals("")) {
            this.userName.sendKeys(inputUserName);
        }
        this.password.clear();
        if (!inputFirstName.equals("")) {
            this.password.sendKeys(inputPassword);
        }
    }

    public void verifyUnsuccessfullyAccountAlreadyExists(String userName) {
        try {
            Assert.assertEquals(TestRunner.driver.switchTo().alert().getText(), "Username " + '"' + userName + '"' + " is already taken",
                    "Add account unsuccessfully with account already Exits");
            TestRunner.driver.switchTo().alert().accept();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

    public void getSummit() {
        createButton.click();
    }

}
