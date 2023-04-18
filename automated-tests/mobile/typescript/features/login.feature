Feature: The BetterBank app functionalities

  Scenario Outline: As a user, I can log into the application to check account balance

    Given I am on the login page
    When I login with <account> account
    Then I should see the balance with the value <balance>

    Examples:
      | account | balance  |
      | 123456  | 375.6    |
