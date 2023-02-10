//package com.natwest.exception;
//
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.ControllerAdvice;
//import org.springframework.web.bind.annotation.ExceptionHandler;
//
//@ControllerAdvice
//public class GlobalExceptionHandler {
//	
//	@ExceptionHandler(value=CredentialsMisMatch.class)
//	public ResponseEntity<? > CredentialsMisMatch (){
//		
//		return new ResponseEntity<String > ("invalid credentials, Please provide correct email and password", HttpStatus.BAD_REQUEST);
//	}
//	
//
//}
