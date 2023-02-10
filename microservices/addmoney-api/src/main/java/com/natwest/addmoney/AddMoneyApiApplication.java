package com.natwest.addmoney;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@EnableDiscoveryClient
@SpringBootApplication
public class AddMoneyApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(AddMoneyApiApplication.class, args);

	}

}
