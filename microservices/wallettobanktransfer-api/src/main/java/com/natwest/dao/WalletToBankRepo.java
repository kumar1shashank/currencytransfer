
package com.natwest.dao;

import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.natwest.model.WalletToBank;

@Repository
public interface WalletToBankRepo extends JpaRepository<WalletToBank, String> {
	
	Optional<List<WalletToBank>> findBySenderaccount(String accNo);

}