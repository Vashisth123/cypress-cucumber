Feature: Smoke suite for practice

Scenario: Validate the landing page
Given I navigate to https://automationexercise.com/
And I should see text AutomationExercise
When I click tab CONTACT US
Then I should see text Feedback For Us