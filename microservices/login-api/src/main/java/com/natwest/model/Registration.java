package com.natwest.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity

public class Registration {
	
	
	private String fname;
    private String lname;
    @Id
    private String email;
    private String cuspass;
    private String confirmpass;
    private int walletaccount;
    
	public Registration() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Registration(String fname, String lname, String email, String cuspass, String confirmpass,
			int walletaccount) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.email = email;
		this.cuspass = cuspass;
		this.confirmpass = confirmpass;
		this.walletaccount = walletaccount;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getCuspass() {
		return cuspass;
	}

	public void setCuspass(String cuspass) {
		this.cuspass = cuspass;
	}

	public String getConfirmpass() {
		return confirmpass;
	}

	public void setConfirmpass(String confirmpass) {
		this.confirmpass = confirmpass;
	}

	public int getWalletaccount() {
		return walletaccount;
	}

	public void setWalletaccount(int walletaccount) {
		this.walletaccount = walletaccount;
	}

	@Override
	public String toString() {
		return "Registration [fname=" + fname + ", lname=" + lname + ", email=" + email + ", cuspass=" + cuspass
				+ ", confirmpass=" + confirmpass + ", walletaccount=" + walletaccount + "]";
	}
    
    
    
   
}