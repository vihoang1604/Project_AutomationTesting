package tests.managementApplicationTests;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;

import static tests.PageProvider.getAddApplicationPage;
import static tests.PageProvider.getCommonPage;

public class AddApplicationTest {

    @And("^I click add application button$")
    public void clickAddAppButton() throws InterruptedException {
        Thread.sleep(2000);
        getAddApplicationPage().clickAddApp();
    }

    @And("^I input app name as (.*) session expiration as (.*) user base as (.*)$")
    public void inputAppInformation(String appName, String numberSession, String userBase) throws InterruptedException {
        Thread.sleep(2000);
        getAddApplicationPage().setApplicationInformation(appName, numberSession, userBase);
    }

    @And("^I click create button$")
    public void clickCreateButton() throws InterruptedException {
        Thread.sleep(2000);
        getAddApplicationPage().clickCreate();
    }

    @Then("^I verify that system add application successfully with app name as (.*) session expiration as (.*) and user base as (.*)$")
    public void verifyAddSuccessfully(String appName, String numberSession, String userBase) throws InterruptedException {
        Thread.sleep(2000);
        getCommonPage().verifyDataTableApplication(appName, numberSession, userBase,true);
    }

    @Then("^I verify that system add application unsuccessfully with app name as (.*) session expiration as (.*) and user base as (.*)$")
    public void verifyAddUnsuccessfully(String appName, String numberSession, String userBase) throws InterruptedException {
        getCommonPage().closeAlertPopup();
        Thread.sleep(2000);
        getCommonPage().verifyDataTableApplication(appName, numberSession, userBase,false);
    }
}

