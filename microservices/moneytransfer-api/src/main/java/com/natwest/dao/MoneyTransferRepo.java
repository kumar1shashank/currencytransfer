package com.natwest.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.natwest.model.MoneyTransfer;

@Repository
public interface MoneyTransferRepo extends JpaRepository<MoneyTransfer, String> {
 
	Optional<List<MoneyTransfer>> findBySenderaccount(String accNo);
    Optional<List<MoneyTransfer>> findByReceiveraccount(String accNo);
}
