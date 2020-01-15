package tests.managementApplicationTests;

import cucumber.api.java.en.And;
import org.testng.Assert;

import static tests.PageProvider.*;

public class EditApplicationTest {
    @And("^I click edit application button on the row contains (.*)$")
    public void clickEditAppButton(String appName) throws InterruptedException {
        Thread.sleep(2000);
        getEditPage().clickEditApp(appName);
    }

    @And("^I edit app name as(.*) session expiration as (.*) user base as (.*)$")
    public void editAppInformation(String appName, String numberSession, String userBase) throws InterruptedException {
        Thread.sleep(2000);
        getEditPage().editApplicationInformation(appName, numberSession, userBase);
    }

    @And("^I click update button$")
    public void clickUpdateButton() throws InterruptedException {
        Thread.sleep(2000);
        getEditPage().clickUpdate();
    }

    @And("^I verify that system update application successfully with app name as (.*) session expiration as (.*) and user base as (.*)$")
    public void verifyUpdateSuccessfully(String appName, String numberSession, String userBase) throws InterruptedException {
        Thread.sleep(2000);
       getCommonPage().verifyDataTableApplication(appName, numberSession, userBase,true);

    }

    @And("^I verify that system update application unsuccessfully with app name as (.*) session expiration as (.*) and user base as (.*)$")
    public void verifyUpdateUnsuccessfully(String appName, String numberSession, String userBase) throws InterruptedException {
        Thread.sleep(2000);
        getCommonPage().verifyDataTableApplication(appName, numberSession, userBase,false);
    }
}


