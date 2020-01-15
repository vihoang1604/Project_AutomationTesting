package tests;

import org.openqa.selenium.support.PageFactory;
import pages.*;
import pages.loginRegisterPages.LoginPage;
import pages.loginRegisterPages.RegisterPage;
import pages.managementAccoumtPages.AddAccountPage;
import pages.managementAccoumtPages.DeleteAccountPage;
import pages.managementAccoumtPages.UpdateAccountPage;
import pages.managementApplicationPages.AddApplicationPage;
import pages.managementApplicationPages.DeleteApplicationPage;
import pages.managementApplicationPages.EditApplicationPage;
import runner.TestRunner;

public class PageProvider {
    private static LoginPage loginPage;
    private static AddApplicationPage addApplicationPage;
    private static CommonPage commonPage;
    private static EditApplicationPage editPage;
    private static DeleteApplicationPage deletePage;
    private static RegisterPage registerPage;
    private static AddAccountPage addAccountPage;
    private static DeleteAccountPage deleteAccountPage;
    private static UpdateAccountPage updateAccountPage;


    public static LoginPage getLoginPage() {
        loginPage = PageFactory.initElements(TestRunner.driver, LoginPage.class);
        return loginPage;
    }

    public static AddApplicationPage getAddApplicationPage() {
        addApplicationPage = PageFactory.initElements(TestRunner.driver, AddApplicationPage.class);
        return addApplicationPage;
    }

    public static CommonPage getCommonPage() {
        commonPage = PageFactory.initElements(TestRunner.driver, CommonPage.class);
        return commonPage;
    }

    public static EditApplicationPage getEditPage() {
        editPage = PageFactory.initElements(TestRunner.driver, EditApplicationPage.class);
        return editPage;
    }

    public static DeleteApplicationPage getDeletePage() {
        deletePage = PageFactory.initElements(TestRunner.driver, DeleteApplicationPage.class);
        return deletePage;
    }

    public static RegisterPage getRegisterPage() {
        registerPage = PageFactory.initElements(TestRunner.driver, RegisterPage.class);
        return registerPage;
    }

    public static AddAccountPage getAddAccountPage() {
        addAccountPage = PageFactory.initElements(TestRunner.driver, AddAccountPage.class);
        return addAccountPage;
    }

    public static DeleteAccountPage getDeleteAccountPage() {
        deleteAccountPage = PageFactory.initElements(TestRunner.driver, DeleteAccountPage.class);
        return deleteAccountPage;
    }

    public static UpdateAccountPage getUpdateAccountPage() {
        updateAccountPage = PageFactory.initElements(TestRunner.driver, UpdateAccountPage.class);
        return updateAccountPage;
    }

}
