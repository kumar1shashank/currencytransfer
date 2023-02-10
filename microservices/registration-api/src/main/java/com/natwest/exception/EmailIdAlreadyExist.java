package com.natwest.exception;

public class EmailIdAlreadyExist extends Exception {
	
	public EmailIdAlreadyExist () {};
	
	public EmailIdAlreadyExist (String msg) {
		
		super (msg);
	};

}
