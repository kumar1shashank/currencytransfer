package com.natwest.model;

import java.time.LocalDateTime;
import java.util.UUID;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="InteraMoneyTransfer")
public class MoneyTransfer {
	
	@Id
	private String transactionid;
	private LocalDateTime transactiondatetime;
	private String senderaccount;
	private String receiveraccount;
	private Double amount;
	private String sendercurrency;
	private String receivercurrency;
	private Double covertedvalueinr;
	
	public MoneyTransfer() {
		this.transactionid = UUID.randomUUID().toString().replaceAll("-", "").substring(0, 10);
	}

	public MoneyTransfer(LocalDateTime transactiondatetime, String senderaccount, String receiveraccount,
			Double amount, String sendercurrency, String receivercurrency, Double covertedvalueinr) {
		this();
		this.transactiondatetime = transactiondatetime;
		this.senderaccount = senderaccount;
		this.receiveraccount = receiveraccount;
		this.amount = amount;
		this.sendercurrency = sendercurrency;
		this.receivercurrency = receivercurrency;
		this.covertedvalueinr=covertedvalueinr;
	}

	public String getTransactionid() {
		return transactionid;
	}

	public LocalDateTime getTransactiondatetime() {
		return transactiondatetime;
	}

	public void setTransactiondatetime(LocalDateTime transactiondatetime) {
		this.transactiondatetime = transactiondatetime;
	}

	public String getSenderaccount() {
		return senderaccount;
	}

	public void setSenderaccount(String senderaccount) {
		this.senderaccount = senderaccount;
	}

	public String getReceiveraccount() {
		return receiveraccount;
	}

	public void setReceiveraccount(String receiveraccount) {
		this.receiveraccount = receiveraccount;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public String getSendercurrency() {
		return sendercurrency;
	}

	public void setSendercurrency(String sendercurrency) {
		this.sendercurrency = sendercurrency;
	}

	public String getReceivercurrency() {
		return receivercurrency;
	}

	public void setReceivercurrency(String receivercurrency) {
		this.receivercurrency = receivercurrency;
	}

	
	public Double getCovertedvalueinr() {
		return covertedvalueinr;
	}

	public void setCovertedvalueinr(Double covertedvalueinr) {
		this.covertedvalueinr = covertedvalueinr;
	}

	@Override
	public String toString() {
		return "MoneyTransfer [transactionid=" + transactionid + ", transactiondatetime=" + transactiondatetime
				+ ", senderaccount=" + senderaccount + ", receiveraccount=" + receiveraccount + ", amount=" + amount
				+ ", sendercurrency=" + sendercurrency + ", receivercurrency=" + receivercurrency
				+ ", covertedvalueinr=" + covertedvalueinr + "]";
	}

	
}
