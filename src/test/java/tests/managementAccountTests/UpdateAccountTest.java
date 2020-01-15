package tests.managementAccountTests;

import cucumber.api.java.en.And;
import tests.PageProvider;

public class UpdateAccountTest extends PageProvider {
    @And("^I click updateAccount with userName need update$")
    public void clickUpdateButton() throws InterruptedException {
        Thread.sleep(2000);
        getUpdateAccountPage().clickUpdateButton(getCommonPage().userName());
        System.out.println("Account don't exit with update");
    }

    @And("^I update account with firstName as(.*), lastName as (.*), role as (.*), userName as (.*), Password (.*)")
    public void informationUpdateAccount(String firstName, String lastName, String role, String userName, String password) throws InterruptedException {
        Thread.sleep(2000);
        getUpdateAccountPage().getInformationUpdateAccount(firstName, lastName, role, userName, password);
        System.out.println("Update account unsuccessfully");
    }

    @And("^I click summit update$")
    public void clickSummitUpdate() throws Throwable {
        try {
            Thread.sleep(2000);
            getUpdateAccountPage().clickUpdateSummit();
        } catch (Exception e) {
            System.out.println("Update account unsuccessfully");
        }

    }
}

