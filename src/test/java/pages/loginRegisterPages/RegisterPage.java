package pages.loginRegisterPages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.Assert;

import java.util.List;

import static tests.PageProvider.getCommonPage;
import static tests.PageProvider.getRegisterPage;

public class RegisterPage {
    @FindBy(css = "a.btn")
    WebElement btn_register_option;

    @FindBy(css = "button.btn")
    WebElement btn_register_submit;

    @FindBy(css = "#firstName")
    WebElement firstname;

    @FindBy(css = "#Text1")
    WebElement lastname;

    @FindBy(css = "#username")
    WebElement username;

    @FindBy(css = "#password")
    WebElement password;

    @FindBy(css = ".ng-binding")
    WebElement messageSuccess;

    public void clickRegisterOption() throws InterruptedException {
        btn_register_option.click();
        Thread.sleep(1000);
    }

    public void setAccountInformation(String firstnameInput, String lastnameInput, String usernameInput, String passwordInput) throws InterruptedException {
        this.firstname.clear();
        if (!firstnameInput.equals("null")) {
            this.firstname.sendKeys(firstnameInput);
            Thread.sleep(1000);
        }
        this.lastname.clear();
        if (!lastnameInput.equals("null")) {
            this.lastname.sendKeys(lastnameInput);
            Thread.sleep(1000);
        }
        this.username.clear();
        if (!usernameInput.equals("null")) {
            this.username.sendKeys(usernameInput);
            Thread.sleep(1000);
        }
        this.password.clear();
        if (!passwordInput.equals("null")) {
            this.password.sendKeys(passwordInput);
            Thread.sleep(1000);
        }
    }

    public void clickRegisterSubmit() throws InterruptedException {
        btn_register_submit.click();
        Thread.sleep(1000);
    }

    public void verifyRegisterSuccess(String message) throws InterruptedException {
       String mess = messageSuccess.getText();
        Assert.assertEquals(mess,message);
        Thread.sleep(1000);
    }
    public void verifyRegisterUnSuccess(String message) throws InterruptedException {
        String mess = messageSuccess.getText();
        Assert.assertEquals(mess,message);
        Thread.sleep(1000);
    }

}
