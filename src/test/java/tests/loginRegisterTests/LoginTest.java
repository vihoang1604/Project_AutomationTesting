package tests.loginRegisterTests;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static tests.PageProvider.getLoginPage;

public class LoginTest {

    @When("^I input username as (.*) password as (.*)$")
    public void openAccount(String username, String password) throws InterruptedException {
        Thread.sleep(2000);
        getLoginPage().setUserInformation(username, password);
    }

    @And("^I click login button$")
    public void clickLoginButton() throws InterruptedException {
        Thread.sleep(2000);
        getLoginPage().clickSubmit();
    }

    @Then("^I verify that system is already login successfully with (.*)$")
    public void verifyUserLoginSuccessfully(String usernameInput) throws InterruptedException {
        Thread.sleep(2000);
        getLoginPage().verifyLoginSuccess("Welcome to Fusion Metrics,",usernameInput);
    }

    @Then("^I verify that system is already login unsuccessfully$")
    public void verifyUserLoginUnsuccessfully() throws InterruptedException {
        Thread.sleep(2000);
        getLoginPage().verifyLoginUnsuccess("Username or password is incorrect");
    }
}
