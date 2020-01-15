Feature: Register account

  Background:
    Given Open website http://localhost:8080/demo/

  Scenario Outline: Register account successfully
    When  I click register option button
    And I input firstname as <firstname> lastname as <lastname> username as <username> password as <password>
    Then I click register submit
    Then I verify that system is register successfully
    And I login successfully as <username> and <password>
    Then I log out
    Examples:
      | firstname | lastname | username    | password    |
      | nhung     | nguyen   | nhungnguyen | nhung270599 |

  Scenario Outline: Register account unsuccessfully
    When  I click register option button
    And I input firstname as <firstname> lastname as <lastname> username as <username> password as <password>
    Then I click register submit
    Then I verify that system is register unsuccessfully with <username> already is taken
    Examples:
      | firstname | lastname | username    | password    |
      | nhung     | nguyen   | nhungnguyen | nhung270599 |