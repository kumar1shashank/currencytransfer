package com.natwest.addmoney.controller;


import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.addmoney.exception.TransactionsNotFound;
import com.natwest.addmoney.model.AddMoney;
import com.natwest.addmoney.service.AddMoneyService;



@RestController
@RequestMapping("/api/money")
public class AddMoneyController {
	
	@Autowired
	AddMoneyService addmoneyservice;
	
	@PostMapping("/addmoney")
	public ResponseEntity<?> addMoneyInWallet(@RequestBody AddMoney addmoney){
		
		addmoney.setTransactiondatetime(LocalDateTime.now());

		
		return new ResponseEntity<AddMoney> (addmoneyservice.addmoneytowallet(addmoney),HttpStatus.ACCEPTED); 
	}
	
	@GetMapping("/addmoney/history/{accNo}")
	public ResponseEntity <?> getHistory(@PathVariable int accNo)  throws TransactionsNotFound
	{ try { List<AddMoney> obj = addmoneyservice.findByAccount(accNo);
	
	if (obj.isEmpty()) {
		throw new TransactionsNotFound("You have not added any money in your account yet");
	} else
		return new ResponseEntity<List<AddMoney>>(obj, HttpStatus.OK);}
	catch (TransactionsNotFound e) {
		return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
	}  }
	
	

		
} 
