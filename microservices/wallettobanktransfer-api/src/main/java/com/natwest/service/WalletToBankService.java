package com.natwest.service;


import java.util.List;


import com.natwest.exception.InsufficientBalance;
import com.natwest.exception.NoTransactionFound;
import com.natwest.model.WalletToBank;


public interface WalletToBankService {
	public WalletToBank walletToBankTransfer(WalletToBank money) throws InsufficientBalance;
	public List <WalletToBank> findBySenderaccount(String AccNo) throws NoTransactionFound;
}
