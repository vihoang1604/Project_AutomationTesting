package tests;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import runner.TestRunner;

import static tests.PageProvider.getCommonPage;
import static tests.PageProvider.getLoginPage;


public class CommonTest {

    // open website
    @Given("Open website (.*)$")
    public void user_already_on_home_page(String website) throws InterruptedException {
        Thread.sleep(5000);
        TestRunner.driver.get(website);
        TestRunner.driver.manage().window().maximize();
    }

    // login successfully
    @Given("I login successfully as (.*) and (.*)")
    public void loginSuccess(String username, String pass) throws InterruptedException {
        Thread.sleep(1000);
        getLoginPage().setUserInformation(username, pass);
        Thread.sleep(1000);
        getLoginPage().clickSubmit();
        Thread.sleep(1000);
        getLoginPage().verifyLoginSuccess("Welcome to Fusion Metrics,", username);
    }

    // click management tab
    @When("^I click management in sidebar$")
    public void clickSidebarItem() throws InterruptedException {
        Thread.sleep(1000);
        getCommonPage().clickApplicationSideBar();
    }

    // logout website
    @Then("^I log out$")
    public void clickLogoutButton() throws InterruptedException {
        try {
            Thread.sleep(1000);
            getCommonPage().logOut();
        } catch (Exception e) {
            System.out.println("logout unsuccessfully");
        }
    }

    // scroll down page
    @When("^I scroll down page$")
    public void scrollDown() throws InterruptedException {
        Thread.sleep(2000);
        getCommonPage().scrollDown();
        Thread.sleep(2000);
    }

    // click login account tab
    @And("^I click loginAccountTab$")
    public void clickLoginAccountTab() throws InterruptedException {
        Thread.sleep(2000);
        getCommonPage().clickLoginAccountTab();
    }

    // click scroll up page
    @And("^I scroll up page$")
    public void scrollUp() throws InterruptedException {
        Thread.sleep(2000);
        getCommonPage().scrollUp();
    }

    //verify userName
    @Then("^I verify successfully with firstName as(.*), lastName as (.*), role as (.*), userName as (.*), Password (.*)$")
    public void verifyAddAccountSuccessfully(String firstName, String lastName, String role, String userName, String password) throws InterruptedException {
        Thread.sleep(2000);
        if (getCommonPage().verifyDataTableAccount(firstName, lastName, role, userName, password) == true) {
            System.out.println("Action account successfully");
        } else {
            System.out.println("Action account unsuccessfully");
        }
        Thread.sleep(2000);
    }
}
