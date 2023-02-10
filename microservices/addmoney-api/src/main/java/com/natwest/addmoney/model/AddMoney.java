package com.natwest.addmoney.model;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity	
@Table(name="Walletaddmoney")
public class AddMoney {
	@Id
    private String transactionid;
    private int walletaccount;
    private double amount;
    private LocalDateTime transactiondatetime;

    public AddMoney() {
        super();
        this.transactionid = UUID.randomUUID().toString();
    }

    public AddMoney(int walletaccount, double amount, LocalDateTime transactiondatetime) {
        super();
        this.transactionid = UUID.randomUUID().toString();
        this.walletaccount = walletaccount;
        this.amount = amount;
        this.transactiondatetime = transactiondatetime;
    }

    public AddMoney(String transactionid, int walletaccount, double amount, LocalDateTime transactiondatetime) {
        super();
        this.transactionid = transactionid;
        this.walletaccount = walletaccount;
        this.amount = amount;
        this.transactiondatetime = transactiondatetime;
    }

    public String getTransactionid() {
        return transactionid;
    }

    public void setTransactionid(String transactionid) {
        this.transactionid = transactionid;
    }

    public int getWalletaccount() {
        return walletaccount;
    }

    public void setWalletaccount(int walletaccount) {
        this.walletaccount = walletaccount;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public LocalDateTime getTransactiondatetime() {
        return transactiondatetime;
    }

    public void setTransactiondatetime(LocalDateTime transactiondatetime) {
        this.transactiondatetime = transactiondatetime;
    }

    @Override
    public String toString() {
        return "AddMoney [transactionid=" + transactionid + ", walletaccount=" + walletaccount + ", amount=" + amount
                + ", transactiondatetime=" + transactiondatetime + "]";
    }
}
    

