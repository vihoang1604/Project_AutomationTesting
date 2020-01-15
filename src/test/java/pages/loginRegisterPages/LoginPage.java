package pages.loginRegisterPages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

public class LoginPage {
    @FindBy(css = "#username")
    WebElement username;

    @FindBy(css = "#password")
    WebElement password;

    @FindBy(css = ".form-actions > button:nth-child(1)")
    WebElement btn_Login;

    @FindBy(css = ".text-muted")
    WebElement textWelcome;

    @FindBy(css = ".ng-binding")
    WebElement textMessage;

    @FindBy(css = "#userLoggedName")
    WebElement userLoggedName;

    public void setUserInformation(String usernameInput, String passwordInput) throws InterruptedException {
        this.username.clear();
        if (!username.equals("null")) {
            this.username.sendKeys(usernameInput);
            Thread.sleep(1000);
        }
        this.password.clear();
        if (!password.equals("null")) {
            this.password.sendKeys(passwordInput);
            Thread.sleep(1000);
        }
    }

    public void clickSubmit() throws InterruptedException {
        btn_Login.click();
        Thread.sleep(2000);
    }

    public void verifyLoginSuccess(String title, String username) {
        String userLoginName = userLoggedName.getText();
        String textTitle = textWelcome.getText();
        if (username.toUpperCase().contains(userLoginName)) {
            Assert.assertEquals(textTitle, title);

        } else
            System.out.println("Verify unsuccessfully");
    }

    public void verifyLoginUnsuccess(String message) {
        String textError = textMessage.getText();
        Assert.assertEquals(textError, message);
    }
}
