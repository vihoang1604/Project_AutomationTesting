package tests.managementAccountTests;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import tests.PageProvider;

public class AddAccountTest extends PageProvider {

    @And("^I click addAccount$")
    public void clickAddAccountButton() throws InterruptedException {
        Thread.sleep(2000);
        getAddAccountPage().getClickAddAccount();
    }


    @And("^I add account with firstName as(.*), lastName as (.*), role as (.*), userName as (.*), Password (.*)$")
    public void informationAddAccount(String firstName, String lastName, String role, String userName, String password) throws InterruptedException {
        Thread.sleep(2000);
        getAddAccountPage().getInformationAddAccount(firstName, lastName, role, userName, password);
        Thread.sleep(2000);
    }

    @And("^I click summit add$")
    public void clickSummit() throws InterruptedException {
        try {
            Thread.sleep(2000);
            getAddAccountPage().getSummit();
        } catch (Exception e) {
            System.out.println("User CAN NOT click add");
        }
    }

    @Then("^I verify unsuccessfully with account already exists with userName as (.*)$")
    public void verifyUnsuccessfullyAccountAlreadyExits(String userName) throws InterruptedException {
        Thread.sleep(2000);
        getAddAccountPage().verifyUnsuccessfullyAccountAlreadyExists(userName);
    }

}
