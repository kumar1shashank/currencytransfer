package com.natwest.service;

import com.natwest.exception.CredentialsMisMatch;
import com.natwest.model.Registration;

public interface LoginService {
	
	public String login (Registration request) throws CredentialsMisMatch;
	public Registration findByEmailAndCuspass(String email, String cuspass);


}
