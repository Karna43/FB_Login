Feature: Login
  
  Background: Launch the url
  	Given user navigates to url "https://facebook.com/"
   
  Scenario Outline: Login with valid and invalid credentials
    When user enters username "<username>" and password "<password>"
    And user clicks on the login button
    Then validate the credentials "<status>" and user should see the message "<expected result>"
    
  Examples:
  |username 						|password| status | expected result |
  |karnakhan43@gmail.com 	| Krahn3fcbo@@	| valid|approve the login to continue|
  |karnakhan43@gmail.com 	| pppppp| invalid|The password that you've entered is incorrect.|