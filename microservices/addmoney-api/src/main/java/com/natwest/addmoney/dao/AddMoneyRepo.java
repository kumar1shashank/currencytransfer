package com.natwest.addmoney.dao;


import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.natwest.addmoney.model.AddMoney;


@Repository
public interface AddMoneyRepo extends JpaRepository<AddMoney, Integer> {

//	public AddMoney findByWalletaccount(int walletaccount);
	public Optional<List<AddMoney>> findByWalletaccount(int walletaccount);}

