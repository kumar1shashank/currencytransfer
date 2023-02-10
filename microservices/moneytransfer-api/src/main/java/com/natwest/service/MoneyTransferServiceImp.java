package com.natwest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.dao.MoneyTransferRepo;
import com.natwest.dao.RegistrationRepo;
import com.natwest.exception.AccountNumberNotFound;
import com.natwest.exception.InsufficientBalance;
import com.natwest.model.MoneyTransfer;
import com.natwest.model.Registration;

@Service
public class MoneyTransferServiceImp implements MoneyTransferService {

	@Autowired
	MoneyTransferRepo moneytransferrepo;

	@Autowired
	RegistrationRepo registrationrepo;


	@Override
	public List<MoneyTransfer> findBySenderaccount(String AccNo) throws AccountNumberNotFound {
		Optional <List<MoneyTransfer>> optList=moneytransferrepo.findBySenderaccount(AccNo);
		
		if(optList.isPresent()) {
			List<MoneyTransfer> tranList=optList.get();
			return tranList;
		}
		else {
			throw new AccountNumberNotFound("No Transaction Found For This Account Number");
		}
	}
	
	@Override
	public MoneyTransfer walletToWalletTransfer(MoneyTransfer money) throws AccountNumberNotFound, InsufficientBalance {
	    String senderAccount = money.getSenderaccount();
	    int senderAccountInt = Integer.parseInt(senderAccount);
	   
	    String receiverAccount = money.getReceiveraccount();
	    int receiverAccountInt = Integer.parseInt(receiverAccount);
	   
	    Registration sender = registrationrepo.findByWalletaccount(senderAccountInt);
	    Registration receiver = registrationrepo.findByWalletaccount(receiverAccountInt);
	    if (receiver == null) {
	        throw new AccountNumberNotFound("Receiver Account Number Does not exist with us ");
	    } else if (sender.getWalletbalance() < money.getCovertedvalueinr()) {
	        throw new InsufficientBalance("You have insufficient balance in account, please check and try again");
	    } else {
	        sender.setWalletbalance(sender.getWalletbalance() - money.getCovertedvalueinr());
	        receiver.setWalletbalance(receiver.getWalletbalance() + money.getCovertedvalueinr());
	        registrationrepo.save(sender);
	        registrationrepo.save(receiver);
	        moneytransferrepo.save(money);
	    }
	    return money;
	}

	@Override
	public List<MoneyTransfer> findByReceiveraccount(String AccNo) throws AccountNumberNotFound {
		Optional <List<MoneyTransfer>> optList=moneytransferrepo.findByReceiveraccount(AccNo);
		
		if(optList.isPresent()) {
			List<MoneyTransfer> tranList=optList.get();
			return tranList;
		}
		else {
			throw new AccountNumberNotFound("No Transaction Found For This Account Number");
		}
	}
	
	 
}
