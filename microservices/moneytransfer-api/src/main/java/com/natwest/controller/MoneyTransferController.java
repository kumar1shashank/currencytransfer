package com.natwest.controller;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.natwest.exception.AccountNumberNotFound;
import com.natwest.exception.InsufficientBalance;
import com.natwest.model.MoneyTransfer;
import com.natwest.service.MoneyTransferService;

@RestController
@RequestMapping("api/moneytransfer")
public class MoneyTransferController {

	@Autowired
	MoneyTransferService moneytransferservice;
	
	@GetMapping("/send/{accNo}")
	public ResponseEntity <?> getsenddetails(@PathVariable String accNo)  throws AccountNumberNotFound
	{ try { List<MoneyTransfer> obj = moneytransferservice.findBySenderaccount(accNo);
	
	if (obj.isEmpty()) {
		throw new AccountNumberNotFound("You have not sent money to any EasyPay Account Number");
	} else
		return new ResponseEntity<List<MoneyTransfer>>(obj, HttpStatus.OK);}
	catch (AccountNumberNotFound e) {
		return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
	}  }
	
	@GetMapping("/receive/{accNo}")
	public ResponseEntity <?> getreceivedetails(@PathVariable String accNo)  throws AccountNumberNotFound
	{ try { List<MoneyTransfer> obj = moneytransferservice.findByReceiveraccount(accNo);
	
	if (obj.isEmpty()) {
		throw new AccountNumberNotFound("You have not received money to from any EasyPay Account Number");
	} else
		return new ResponseEntity<List<MoneyTransfer>>(obj, HttpStatus.OK);}
	catch (AccountNumberNotFound e) {
		return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
	}  }
	
	

	@PostMapping("/transfer")
	public ResponseEntity<?> moneytransfer(@RequestBody MoneyTransfer money)
			throws AccountNumberNotFound, InsufficientBalance {
		money.setTransactiondatetime(LocalDateTime.now());
		MoneyTransfer mobj;
		try {
			mobj = moneytransferservice.walletToWalletTransfer(money);

			return new ResponseEntity<MoneyTransfer>(mobj, HttpStatus.ACCEPTED);
		}

		catch (AccountNumberNotFound e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.NOT_FOUND);
		} catch (InsufficientBalance e) {
			return new ResponseEntity<String>(e.getMessage(), HttpStatus.BAD_REQUEST);
		}

	}

	
}
