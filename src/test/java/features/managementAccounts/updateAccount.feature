Feature: Update Account

  Background:
    Given Open website http://localhost:8080/demo/#!/
    Given I login successfully as admin and admin

  Scenario Outline: Update Account successfully
    When I scroll down page
    And I click loginAccountTab
    And I scroll up page
    And I click updateAccount with userName need update
    And  I update account with firstName as<firstName>, lastName as <lastName>, role as <role>, userName as <userName>, Password <password>
    And I click summit update
    Then I verify successfully with firstName as<firstName>, lastName as <lastName>, role as <role>, userName as <userName>, Password <password>
    And I log out
    And I login successfully as <userName> and <password>
    And I log out
    Examples:
      | firstName | lastName | role  | userName | password |
      | lieu      | ngo      | Admin | lieu.ngo | 123456   |

  Scenario Outline: Update Account unsuccessfully
    When I scroll down page
    And I click loginAccountTab
    And I scroll up page
    And I click updateAccount with userName need update
    And  I update account with firstName as<firstName>, lastName as <lastName>, role as <role>, userName as <userName>, Password <password>
    And I click summit update
    Then I verify successfully with firstName as<firstName>, lastName as <lastName>, role as <role>, userName as <userName>, Password <password>
    And I log out
    Examples:
      | firstName | lastName | role  | userName  | password |
      |           | ngo      | Admin | thieu.ngo | 123456   |