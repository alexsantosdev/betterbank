Feature: The BetterBank app functionalities

  Scenario Outline: As a user, I can log into the application

    Given I am on the login page
    When I login with <account>
    Then I should see a flash message saying <message>

    Examples:
      | account | message                        |
      | 123456  | You logged into a secure area! |
