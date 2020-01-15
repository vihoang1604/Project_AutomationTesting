Feature: Add Account

  Background:
    Given Open website http://localhost:8080/demo/#!/
    Given I login successfully as admin and admin

  Scenario Outline: Add Account successfully
    When I scroll down page
    And I click loginAccountTab
    And I scroll up page
    And I click addAccount
    And  I add account with firstName as<firstName>, lastName as <lastName>, role as <role>, userName as <userName>, Password <password>
    And I click summit add
    Then I verify successfully with firstName as<firstName>, lastName as <lastName>, role as <role>, userName as <userName>, Password <password>
    And I log out
    And I login successfully as <userName> and <password>
    And I log out
    Examples:
      | firstName | lastName | role  | userName     | password |
      | thao      | ngo      | Admin | thao.ngo     | 123456   |

  Scenario Outline: Add Account unsuccessfully with null input data
    When I scroll down page
    And I click loginAccountTab
    And I scroll up page
    And I click addAccount
    And  I add account with firstName as<firstName>, lastName as <lastName>, role as <role>, userName as <userName>, Password <password>
    And I click summit add
    Then I verify successfully with firstName as<firstName>, lastName as <lastName>, role as <role>, userName as <userName>, Password <password>
    And I log out
    Examples:
      | firstName | lastName | role  | userName   | password |
      | thao      |          | Admin | thao.le    | 123456   |

  Scenario Outline: Add Account unsuccessfully with Account already exists
    When I scroll down page
    And I click loginAccountTab
    And I scroll up page
    And I click addAccount
    And  I add account with firstName as<firstName>, lastName as <lastName>, role as <role>, userName as <userName>, Password <password>
    And I click summit add
    Then I verify unsuccessfully with account already exists with userName as <userName>
    And I log out
    Examples:
      | firstName | lastName | role  | userName | password |
      | thao      | ngo      | Admin | thao.ngo | 123456   |
