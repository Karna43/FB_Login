$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters username \"\u003cusername\u003e\" and password \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "name": "validate the credentials \"\u003cstatus\u003e\" and user should see the message \"\u003cexpected result\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "status",
        "expected result"
      ]
    },
    {
      "cells": [
        "karnakhan43@gmail.com",
        "Krahn3fcbo@@",
        "valid",
        "approve the login to continue"
      ]
    },
    {
      "cells": [
        "karnakhan43@gmail.com",
        "pppppp",
        "invalid",
        "The password that you\u0027ve entered is incorrect."
      ]
    }
  ]
});
formatter.background({
  "name": "Launch the url",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigates to url \"https://facebook.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserLogin.user_navigates_to_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters username \"karnakhan43@gmail.com\" and password \"Krahn3fcbo@@\"",
  "keyword": "When "
});
formatter.match({
  "location": "UserLogin.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "UserLogin.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the credentials \"valid\" and user should see the message \"approve the login to continue\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserLogin.validate_the_credentials_and_user_should_see_the_message(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Launch the url",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user navigates to url \"https://facebook.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "UserLogin.user_navigates_to_url(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Login with valid and invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user enters username \"karnakhan43@gmail.com\" and password \"pppppp\"",
  "keyword": "When "
});
formatter.match({
  "location": "UserLogin.user_enters_username_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on the login button",
  "keyword": "And "
});
formatter.match({
  "location": "UserLogin.user_clicks_on_the_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate the credentials \"invalid\" and user should see the message \"The password that you\u0027ve entered is incorrect.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "UserLogin.validate_the_credentials_and_user_should_see_the_message(String,String)"
});
formatter.result({
  "status": "passed"
});
});