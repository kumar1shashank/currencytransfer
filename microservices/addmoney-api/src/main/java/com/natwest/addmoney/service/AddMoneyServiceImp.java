package com.natwest.addmoney.service;



import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.natwest.addmoney.dao.AddMoneyRepo;
import com.natwest.addmoney.exception.TransactionsNotFound;
import com.natwest.addmoney.model.AddMoney;


@Service
public class AddMoneyServiceImp implements AddMoneyService {
	
	@Autowired
	AddMoneyRepo addmoneyrepo;

	@Override
	public AddMoney addmoneytowallet(AddMoney addmoney) {
		
		addmoneyrepo.save(addmoney);
		return addmoney;}
	
	@Override
	public List<AddMoney> findByAccount(int walletaccount) throws TransactionsNotFound {
		Optional <List<AddMoney>> optList=addmoneyrepo.findByWalletaccount( walletaccount);
		
		if(optList.isPresent()) {
			List<AddMoney> tranList=optList.get();
			return tranList;
		}
		else {
			throw new TransactionsNotFound("No Transaction Found For This Account Number");
		}
	}

}
	
