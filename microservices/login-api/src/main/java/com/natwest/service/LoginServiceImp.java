//package com.natwest.service;
//
//import java.util.Optional;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.stereotype.Service;
//
//import com.natwest.dao.LoginRepo;
//import com.natwest.exception.CredentialsMisMatch;
//import com.natwest.model.Registration;
//
//@Service
//public class LoginServiceImp implements LoginService {
//	
//	@Autowired
//	LoginRepo loginrepo;
//
//	@Override
//	public String login(Registration request) throws CredentialsMisMatch {
//		
//		Registration obj = loginrepo.findByEmailAndCuspass(request.getEmail(), request.getCuspass());
//		
//		if (obj==null) {throw new CredentialsMisMatch (); }
//		
//		else {return "You have logged in successfully";}
//	}
//
//	@Override
//	public Registration findByEmailAndCuspass(String email, String cuspass) {
//		return loginrepo.findByEmailAndCuspass(email, cuspass);
//	}
//	
//	
//
//}

package com.natwest.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.natwest.dao.LoginRepo;
import com.natwest.exception.CredentialsMisMatch;
import com.natwest.model.Registration;

@Service
public class LoginServiceImp implements LoginService {
	
	@Autowired
	LoginRepo loginrepo;

	@Autowired
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Override
	public String login(Registration request) throws CredentialsMisMatch {
		
		Registration obj = loginrepo.findByEmailAndCuspass(request.getEmail(), request.getCuspass());
		
		if (obj==null) {throw new CredentialsMisMatch (); }
		
		else if(bCryptPasswordEncoder.matches(request.getCuspass(), obj.getCuspass())) {
			return "You have logged in successfully";
		}
		else {
			throw new CredentialsMisMatch ();
		}
	}

	@Override
	public Registration findByEmailAndCuspass(String email, String cuspass) {
		Registration obj = loginrepo.findByEmail(email);
		if(obj!=null && bCryptPasswordEncoder.matches(cuspass, obj.getCuspass())) {
			return obj;
		}
		else {
			return null;
		}
	}
}
