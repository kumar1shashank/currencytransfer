package com.natwest.exception;

public class NoTransactionFound extends Exception {

	public NoTransactionFound () {};
	public NoTransactionFound (String msg) {super (msg);};
}
