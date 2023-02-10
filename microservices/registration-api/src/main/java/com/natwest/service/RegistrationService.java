package com.natwest.service;

import java.util.List;

import com.natwest.exception.EmailIdAlreadyExist;
import com.natwest.model.Registration;

public interface RegistrationService {
	
	public Registration addcus(Registration cus) throws EmailIdAlreadyExist;
	public List<Registration> getallcus();
	public Registration accountbalance(int walletaccount);
	

}
