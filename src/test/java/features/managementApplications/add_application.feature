Feature: Add Application

  Scenario Outline: Add New Application Successfully
    Given Open website http://localhost:8080/demo/
    And I login successfully as admin and admin
    When I click management in sidebar
    And I click add application button
    And  I input app name as <appName> session expiration as <numberSession> user base as <userBase>
    And  I click create button
    Then I verify that system add application successfully with app name as <appName> session expiration as <numberSession> and user base as <userBase>
    Examples:
      | appName          | numberSession | userBase        |
      | cucumber-project | 3             | User By Session |

  Scenario Outline: Add New Application Unsuccessfully
    And I click add application button
    And  I input app name as <appName> session expiration as <numberSession> user base as <userBase>
    And  I click create button
    Then I verify that system add application unsuccessfully with app name as <appName> session expiration as <numberSession> and user base as <userBase>
    Examples:
      | appName          | numberSession | userBase                 |
      | cucumber-project | 4             | User By Location Sharing |


