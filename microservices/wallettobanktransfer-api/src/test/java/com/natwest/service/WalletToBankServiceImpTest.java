package com.natwest.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;


import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;

import com.natwest.dao.RegistrationRepo;
import com.natwest.dao.WalletToBankRepo;
import com.natwest.exception.InsufficientBalance;
import com.natwest.model.Registration;
import com.natwest.model.WalletToBank;
import com.natwest.service.WalletToBankServiceImp;

@ExtendWith(MockitoExtension.class)
public class WalletToBankServiceImpTest {

    @Mock
    private WalletToBankRepo wallettobankrepo;
    @Mock
    private RegistrationRepo registrationrepo;
    @InjectMocks
    private WalletToBankServiceImp service;


    @Test
    public void testTransferWithInsufficientBalance() {
        WalletToBank money = new WalletToBank();
        money.setSenderaccount("123456");
        money.setCovertedvalueinr(100000.00);

        Registration sender = new Registration();
        sender.setWalletaccount(123456);
        sender.setWalletbalance(10000);

        Mockito.when(registrationrepo.findByWalletaccount(123456)).thenReturn(sender);

        InsufficientBalance exception = assertThrows(InsufficientBalance.class, () -> {
            service.walletToBankTransfer(money);
        });

        assertEquals("You have insufficient balance in account, please check and try again", exception.getMessage());
    }

    @Test
    public void testSuccessfulTransfer() throws InsufficientBalance {
        WalletToBank money = new WalletToBank();
        money.setSenderaccount("123456");
        money.setCovertedvalueinr(1000.00);

        Registration sender = new Registration();
        sender.setWalletaccount(123456);
        sender.setWalletbalance(10000);

        Mockito.when(registrationrepo.findByWalletaccount(123456)).thenReturn(sender);
        Mockito.doReturn(money).when(wallettobankrepo).save(money);
        Mockito.doReturn(sender).when(registrationrepo).save(sender);

        WalletToBank result = service.walletToBankTransfer(money);

        assertEquals(1000, result.getCovertedvalueinr(), 0.001);
        Mockito.verify(wallettobankrepo, Mockito.times(1)).save(money);
        Mockito.verify(registrationrepo, Mockito.times(1)).save(sender);
    }


}



