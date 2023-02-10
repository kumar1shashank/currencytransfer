package com.natwest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class WalletToBankTransferApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(WalletToBankTransferApiApplication.class, args);

	}

}
