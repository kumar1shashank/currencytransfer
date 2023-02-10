package com.natwest.service;

import java.util.List;


import com.natwest.exception.AccountNumberNotFound;
import com.natwest.exception.InsufficientBalance;
import com.natwest.model.MoneyTransfer;

public interface MoneyTransferService {
	
	public MoneyTransfer walletToWalletTransfer(MoneyTransfer money) throws AccountNumberNotFound,InsufficientBalance;
	public List <MoneyTransfer> findBySenderaccount(String AccNo) throws AccountNumberNotFound;
	public List <MoneyTransfer> findByReceiveraccount(String AccNo) throws AccountNumberNotFound;
}
