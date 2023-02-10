package com.natwest.controller;

import java.util.Date;
import java.util.HashMap;
import java.util.Map;




import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

import com.natwest.exception.CredentialsMisMatch;
import com.natwest.model.Registration;
import com.natwest.service.LoginService;

@RestController
@RequestMapping("api/customer")
public class LoginController {
	
	
static final long EXPIRY_TIME=1000*60*60;
	
	Map<String, String> mymap = new HashMap<>();
	Map<String, Integer> myacc = new HashMap<>();

	

	
	
	
	@Autowired
	LoginService loginserve;
	
	@PostMapping("/getacc")
	public ResponseEntity<?> getcusacc(@RequestBody Registration request){
		Registration obj= loginserve.findByEmailAndCuspass(request.getEmail(),request.getCuspass());
		return new ResponseEntity<> (obj,HttpStatus.OK );
		
	}
	
	@PostMapping("/login")
	public ResponseEntity<?> login (@RequestBody Registration request) throws CredentialsMisMatch{
		
		
		String jwtToken;
		
		try {
			jwtToken=generateToken(request.getEmail(),request.getCuspass());
			Registration obj = loginserve.findByEmailAndCuspass(request.getEmail(),request.getCuspass());
			mymap.clear();
			mymap.put("message", "User successfully logged in");
			mymap.put("token", jwtToken);
			myacc.put("walletaccount", obj.getWalletaccount());
			String walletaccount = Integer.toString(obj.getWalletaccount());
			mymap.put("walletaccount", walletaccount);
			mymap.put("user", request.getEmail());
			mymap.put("UserFname", obj.getFname());
			mymap.put("UserLname", obj.getLname());
			
			
			return new ResponseEntity<>(mymap, HttpStatus.OK);
		} catch (CredentialsMisMatch e) {
			mymap.clear();
			mymap.put("message", e.getMessage());
			mymap.put("token", null);
			return new ResponseEntity<>(mymap,HttpStatus.UNAUTHORIZED);
		}
		
		
		
		
	}
	
public String generateToken(String email, String pass) throws CredentialsMisMatch {
		
		if(email==null || pass==null) {
			throw new CredentialsMisMatch("Please enter the valid details");
		}
		
		Registration obj = loginserve.findByEmailAndCuspass(email, pass);
		if(obj==null) {
			throw new CredentialsMisMatch("email or password incorrect");
		}
		//token
		String token = Jwts.builder()
							.setSubject(email)
							.setIssuedAt(new Date())
							.setExpiration(new Date(System.currentTimeMillis()+EXPIRY_TIME))
							.signWith(SignatureAlgorithm.HS256, "mysecretkey")
							.compact();
		return token;
							
		
	}

}
