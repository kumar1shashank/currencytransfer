package com.natwest.controller;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.when;

import java.time.LocalDateTime;


import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


import com.natwest.exception.InsufficientBalance;
import com.natwest.model.WalletToBank;
import com.natwest.service.WalletToBankService;

@ExtendWith(MockitoExtension.class)
public class WalletToBankControllerTest {
	
	@InjectMocks
	private WalletToBankController walletToBankController;
	
	@Mock
	private WalletToBankService walletToBankService;
	
	@Test
	public void testWalletToBankTransfer_Success() throws InsufficientBalance {
		WalletToBank money = new WalletToBank();
		money.setTransactiondatetime(LocalDateTime.now());
		
		when(walletToBankService.walletToBankTransfer(money)).thenReturn(money);
		
		ResponseEntity<?> response = walletToBankController.walletToBankTransfer(money);
		
		assertEquals(HttpStatus.ACCEPTED, response.getStatusCode());
		assertEquals(money, response.getBody());
	}
	
	@Test
	public void testWalletToBankTransfer_InsufficientBalance() throws InsufficientBalance {
		WalletToBank money = new WalletToBank();
		money.setTransactiondatetime(LocalDateTime.now());
		
		when(walletToBankService.walletToBankTransfer(money)).thenThrow(new InsufficientBalance("Insufficient Balance"));
		
		ResponseEntity<?> response = walletToBankController.walletToBankTransfer(money);
		
		assertEquals(HttpStatus.BAD_REQUEST, response.getStatusCode());
		assertEquals("Insufficient Balance", response.getBody());
	}
	

}

