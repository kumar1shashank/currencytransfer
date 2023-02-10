package com.natwest.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.natwest.dao.RegistrationRepo;
import com.natwest.exception.EmailIdAlreadyExist;
import com.natwest.model.Registration;

@Service
public class RegistrationServiceImp implements RegistrationService {
	
	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Autowired
	RegistrationRepo regisrepo;
	
	@Override
	public Registration addcus(Registration cus) throws EmailIdAlreadyExist{
		
		Optional<Registration> obj = regisrepo.findById(cus.getEmail());
		
		if (obj.isPresent()) {throw new EmailIdAlreadyExist ("Email-id already registered with us"); }
		else {
            cus.setCuspass(bCryptPasswordEncoder.encode(cus.getCuspass()));
            cus.setConfirmpass(bCryptPasswordEncoder.encode(cus.getConfirmpass()));
            regisrepo.save(cus);
        }
		return cus;
	}

	@Override
	public List<Registration> getallcus() {
		return regisrepo.findAll();
		
	}

	@Override
	public Registration accountbalance(int walletaccount) {
		Registration obj = regisrepo.findByWalletaccount(walletaccount);
		return obj;
	}

}
