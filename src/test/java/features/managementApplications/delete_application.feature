Feature: Delete Application

  Background:
    Given Open website http://localhost:8080/demo/
    And I login successfully as admin and admin
    When I click management in sidebar

  Scenario Outline: Delete Application Successfully
    And I click delete application button on the row contains <appName>
    And I confirm that I will delete the application
    Then I verify that delete <appName> successfully
    Examples:
      | appName |
      | Fusion  |

