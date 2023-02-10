package com.natwest.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.natwest.exception.EmailIdAlreadyExist;
import com.natwest.model.Registration;
import com.natwest.service.RegistrationService;

@RestController
@RequestMapping("api/customers")
public class RegistrationController {
	
	@Autowired
	RegistrationService regservice;
	
	@PostMapping("/add")
	public ResponseEntity<? > addcus (@RequestBody Registration cus) throws EmailIdAlreadyExist {
		
		Registration reg;
		
		try {reg = regservice.addcus(cus);
		
		return new ResponseEntity<Registration > (reg, HttpStatus.CREATED); 
		} catch (EmailIdAlreadyExist e) {return new ResponseEntity<String > (e.getMessage(), HttpStatus.CONFLICT);}
		
		}
	
	@GetMapping("/get")
    public List<Registration> getallcus () {
		
		return regservice.getallcus();}
	
	@GetMapping("/accountbalance/{walletaccount}")
	public ResponseEntity<? > getaccountbalance (@PathVariable int walletaccount){
		
		Registration balance = regservice.accountbalance(walletaccount);
		
		return new ResponseEntity <Registration> (balance,HttpStatus.OK);
	}
	
	
	
	
	
	
	

}
