package tests.managementApplicationTests;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.testng.Assert;

import static tests.PageProvider.getCommonPage;
import static tests.PageProvider.getDeletePage;

public class DeleteApplicationTest {

    @And("^I click delete application button on the row contains (.*)$")
    public void clickAddAppButton(String appName) throws InterruptedException {
        getCommonPage().scrollUp();
        getDeletePage().clickDeleteApp(appName);
        Thread.sleep(2000);
    }

    @And("^I confirm that I will delete the application$")
    public void clickconfirmDeleteButton() throws InterruptedException {
        getDeletePage().confirmDelete();
        Thread.sleep(2000);
    }

    @Then("^I verify that delete (.*) successfully$")
    public void verifyDeleteSuccess(String appName) throws InterruptedException {
        Assert.assertEquals(getDeletePage().verifyDeleteAppSuccess(appName), true, "Delete application successfully");
        Thread.sleep(2000);
    }
}
