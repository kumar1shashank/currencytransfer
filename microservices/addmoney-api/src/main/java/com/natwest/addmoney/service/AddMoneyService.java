package com.natwest.addmoney.service;

import java.util.List;

import com.natwest.addmoney.exception.TransactionsNotFound;
import com.natwest.addmoney.model.AddMoney;


public interface AddMoneyService {
	
	public AddMoney addmoneytowallet (AddMoney addmoney);
	public List <AddMoney> findByAccount(int walletaccount) throws TransactionsNotFound;

	
	

}
