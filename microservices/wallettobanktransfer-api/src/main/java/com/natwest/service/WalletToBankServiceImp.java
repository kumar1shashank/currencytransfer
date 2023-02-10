package com.natwest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.dao.RegistrationRepo;
import com.natwest.dao.WalletToBankRepo;
import com.natwest.exception.InsufficientBalance;
import com.natwest.exception.NoTransactionFound;
import com.natwest.model.Registration;
import com.natwest.model.WalletToBank;


@Service
public class WalletToBankServiceImp implements WalletToBankService {
	
	
	@Autowired
	WalletToBankRepo wallettobankrepo;
	
	@Autowired
	RegistrationRepo registrationrepo;

	@Override
	public WalletToBank walletToBankTransfer(WalletToBank money) throws InsufficientBalance {
	
	    String senderAccount = money.getSenderaccount();
	    int senderAccountInt = Integer.parseInt(senderAccount);
	   
	    Registration sender = registrationrepo.findByWalletaccount(senderAccountInt);
	    
	    if (sender.getWalletbalance() < money.getCovertedvalueinr()) {
	        throw new InsufficientBalance("You have insufficient balance in account, please check and try again");
	    } else {
	        sender.setWalletbalance(sender.getWalletbalance() - money.getCovertedvalueinr());
	        registrationrepo.save(sender);
	        wallettobankrepo.save(money);
	    }
	    return money;
	}
	
	
	@Override
	public List<WalletToBank> findBySenderaccount(String AccNo) throws NoTransactionFound {
		Optional <List<WalletToBank>> optList=wallettobankrepo.findBySenderaccount(AccNo);
		
		if(optList.isPresent()) {
			List<WalletToBank> tranList=optList.get();
			return tranList;
		}
		else {
			throw new NoTransactionFound ("No Transaction Form This Account Number To Bank Found");
		}
	}

}
