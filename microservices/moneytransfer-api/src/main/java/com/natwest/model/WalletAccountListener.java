package com.natwest.model;

import java.util.Random;

import jakarta.persistence.PrePersist;

public class WalletAccountListener {

    @PrePersist
    public void generateWalletAccount(Registration registration) {
        Random rand = new Random();
        int walletAccount = 87000000 + rand.nextInt(1000000);
        registration.setWalletaccount(walletAccount);
    }
}