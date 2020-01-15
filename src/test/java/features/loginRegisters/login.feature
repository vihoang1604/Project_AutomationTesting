Feature: Login Demo Website

  Background:
    Given Open website http://localhost:8080/demo/

  Scenario Outline: Login Demo Website Successfully
    When I input username as <username> password as <password>
    And  I click login button
    Then I verify that system is already login successfully with <username>
    Then I log out
    Examples:
      | username | password |
      | admin    | admin    |

  Scenario Outline: Login Demo Website Unsuccessfully
    When I input username as <username> password as <password>
    And  I click login button
    Then I verify that system is already login unsuccessfully
    Examples:
      | username | password |
      | admin2   | admin    |