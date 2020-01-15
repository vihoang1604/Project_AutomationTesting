package pages.managementAccoumtPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.Select;
import runner.TestRunner;

import java.util.List;
import java.util.Random;

public class UpdateAccountPage {

    @FindBy(tagName = "table")
    WebElement accountTable;

    @FindBy(xpath = "(//input[contains(@id,'firstName')])[2]")
    WebElement firstName;

    @FindBy(xpath = "(//input[contains(@id,'lastName')])[2]")
    WebElement lastName;

    @FindBy(xpath = "(//input[contains(@id,'username')])[2]")
    WebElement userName;

    @FindBy(xpath = "(//input[contains(@id,'password')])[2]")
    WebElement password;

    @FindBy(xpath = "(//select[contains(@id,'role')])[2]")
    WebElement roleSelect;

    @FindBy(xpath = "//*[@id=\"page-wrapper\"]/div[4]/div/form/div[6]/button")
    WebElement UpdateButton;

    public int getRandomWithExclusion(Random rnd, int start, int end, int... exclude) {
        int random = start + rnd.nextInt(end - start + 1 - exclude.length);
        for (int ex : exclude) {
            if (random < ex) {
                break;
            }
            random++;
        }
        return random;
    }


    public void clickUpdateButton(String userName) {

        List<WebElement> rows = accountTable.findElements(By.tagName("tr"));
        for (int i = 1; i < rows.size(); i++) {
            List<WebElement> cols = rows.get(i).findElements(By.tagName("td"));
            if (cols.get(0).getText().equals(userName)) {
                TestRunner.driver.findElement(By.xpath("//tbody/tr[" + i + "]/td[5]/a[1]")).click();
            } else {
                System.out.println("Account don't exit");
            }
        }
    }

    public void getInformationUpdateAccount(String inputFirstName, String inputLastName, String inputRole, String inputUserName, String inputPassword) {
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

    public void clickUpdateSummit() {
        this.UpdateButton.click();
    }

}
