package com.natwest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.natwest.model.Registration;

@Repository
public interface RegistrationRepo extends JpaRepository<Registration, String>{
	
	public Registration findByWalletaccount(Integer walletaccount);

}
