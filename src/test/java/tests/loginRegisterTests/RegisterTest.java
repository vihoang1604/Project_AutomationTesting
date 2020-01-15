package tests.loginRegisterTests;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import static tests.PageProvider.getRegisterPage;

public class RegisterTest {
    @When("^I click register option button$")
    public void clickRegisterOption() throws InterruptedException {
        Thread.sleep(2000);
        getRegisterPage().clickRegisterOption();
    }

    @And("^I input firstname as (.*) lastname as (.*) username as (.*) password as (.*)$")
    public void inputAccountInformation(String firstname, String lastname, String username, String password) throws InterruptedException {
        Thread.sleep(2000);
        getRegisterPage().setAccountInformation(firstname,lastname,username,password);
    }

    @Then("^I click register submit$")
    public void clickRegisterSubmit() throws InterruptedException {
        Thread.sleep(2000);
        getRegisterPage().clickRegisterSubmit();
    }
    @Then("^I verify that system is register successfully$")
    public void verifyUserRegisterSuccessfully() throws InterruptedException {
        Thread.sleep(2000);
        getRegisterPage().verifyRegisterSuccess("Registration successful");
    }

    @Then("^I verify that system is register unsuccessfully with (.*) already is taken$")
    public void verifyUserLoginUnsuccessfully(String username) throws InterruptedException {
        Thread.sleep(2000);
        getRegisterPage().verifyRegisterUnSuccess("Username "+'"'+username+'"'+ " is already taken");
    }
}
