package com.natwest.controller;

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
import com.natwest.exception.InsufficientBalance;
import com.natwest.exception.NoTransactionFound;
import com.natwest.model.WalletToBank;
import com.natwest.service.WalletToBankService;

@RestController
@RequestMapping("api/wallettobanktransfer")
public class WalletToBankController {
	
	@Autowired
	WalletToBankService wallettobankservice;
	
	
	@PostMapping("/banktransfer")
	public ResponseEntity<?> walletToBankTransfer(@RequestBody WalletToBank money)
			throws InsufficientBalance {
		money.setTransactiondatetime(LocalDateTime.now());
		WalletToBank mobj;
		try {
			mobj = wallettobankservice.walletToBankTransfer(money);

			return new ResponseEntity<WalletToBank>(mobj, HttpStatus.ACCEPTED);
		}

	       catch (InsufficientBalance e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}

	}
	
	@GetMapping("/details/{accNo}")
	public ResponseEntity <?> getreceivedetails(@PathVariable String accNo)  throws NoTransactionFound
	{ try { List<WalletToBank> obj = wallettobankservice.findBySenderaccount(accNo);
	
	if (obj.isEmpty()) {
		throw new NoTransactionFound("You have not received money  from any EasyPay Account Number");
	} else
		return new ResponseEntity<List<WalletToBank>>(obj, HttpStatus.OK);}
	catch (NoTransactionFound e) {
		return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
	}


}}
