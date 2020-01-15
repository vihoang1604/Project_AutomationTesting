Feature: Delete Account

  Background:
    Given Open website http://localhost:8080/demo/#!/
    Given I login successfully as admin and admin

  Scenario: Delete Account
    When I scroll down page
    And I click loginAccountTab
    And I scroll up page
    And I click deleteAccount with userName
    Then I verify delete successfully
    And I log out
