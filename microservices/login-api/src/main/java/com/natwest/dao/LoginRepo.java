package com.natwest.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.natwest.model.Registration;

@Repository
public interface LoginRepo extends JpaRepository<Registration, String> {

	public Registration findByEmailAndCuspass(String email, String cuspass);
	public Registration findByEmail(String email);
}
