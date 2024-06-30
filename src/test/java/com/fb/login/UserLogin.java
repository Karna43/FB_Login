package com.fb.login;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import io.cucumber.java.en.And;

public class UserLogin {
	
	public static BaseClass base = new BaseClass();
	public static LoginLocators locators;
	
	@Given("user navigates to url {string}")
	public void user_navigates_to_url(String url) {
		BaseClass.browserLaunch(url);
		base.implicitWait();
	}

	@When("user enters username {string} and password {string}")
	public void user_enters_username_and_password(String email, String password) {
		locators = new LoginLocators(BaseClass.driver);
		base.waitClearAndSendText(locators.getEmail(), email);
		base.waitClearAndSendText(locators.getPassword(), password);
	}

	@And("user clicks on the login button")
	public void user_clicks_on_the_login_button() {
		base.waitAndClick(locators.getSubmitButton());
	}
	
	@Then("validate the credentials {string} and user should see the message {string}")
	public void validate_the_credentials_and_user_should_see_the_message(String s, String msg) {
		switch(s) {
		case "valid":
			base.webdriverWait(locators.getAuthenticationMessage());
			base.assertion(locators.getAuthenticationMessage().getText().contains(msg));
			break;
		case "invalid":
			base.webdriverWait(locators.getErrorMessage());
			base.assertion(locators.getErrorMessage().getText().contains(msg));
			break;
		}
	}
		
	}

//	@Then("user should see the authentication message {string}")
//	public void user_should_see_the_authentication_message(String authenticationMsg) {
//		base.webdriverWait(locators.getAuthenticationMessage());
//		Assert.assertTrue(locators.getAuthenticationMessage().getText().contains(authenticationMsg));
//	}
//
//	@And("user should see an error message {string}")
//	public void user_should_see_an_error_message(String Expectederror) {
//		base.webdriverWait(locators.getErrorMessage());
//		Assert.assertTrue(locators.getErrorMessage().getText().contains(Expectederror));
//	}
