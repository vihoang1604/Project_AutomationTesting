Feature: Edit Application

  Scenario Outline: Edit Application Successfully
    Given Open website http://localhost:8080/demo/
    And I login successfully as admin and admin
    When I click management in sidebar
    And I click edit application button on the row contains <appName>
    And  I edit app name as <appNameEdited> session expiration as <numberSessionEdited> user base as <userBaseEdited>
    And  I click update button
    Then I verify that system update application successfully with app name as <appNameEdited> session expiration as <numberSessionEdited> and user base as <userBaseEdited>
    Examples:
      | appName | appNameEdited           | numberSessionEdited | userBaseEdited  |
      | Fusion  | cucumber-project-testNG | 8                   | User By Session |

  Scenario Outline: Edit Application Unsuccessfully
    And I click edit application button on the row contains <appName>
    And  I edit app name as <appNameEdited> session expiration as <numberSessionEdited> user base as <userBaseEdited>
    And  I click update button
    Then I verify that system update application unsuccessfully with app name as <appNameEdited> session expiration as <numberSessionEdited> and user base as <userBaseEdited>
    Examples:
      | appName                 | appNameEdited    | numberSessionEdited | userBaseEdited           |
      | cucumber-project-testNG | cucumber-project |                     | User By Location Sharing |


