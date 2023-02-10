package com.natwest.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
//import org.springframework.web.bind.annotation.CrossOrigin;

import com.natwest.filter.ApiFilter;



//@Configuration
//public class ApiGatewayConfig {
//	
//	@Autowired
//	private ApiFilter apiFilter;
//
//	@Bean
//	public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
//		return builder.routes()
//					.route(r -> r.path("/api/user/**")
//							.uri("lb://user-api"))
//					.route(r -> r.path("/api/accounts/**")
//							.filters(f -> f.filters(apiFilter))
//							.uri("http://localhost:8082"))
//					.route(r -> r.path("/api/transaction/**")
//							.filters(f -> f.filters(apiFilter))
//							.uri("http://localhost:8083"))
//					.route(r -> r.path("/login")
//							.uri("http://localhost:8084"))
//					.build();
//	}
//	
//	
@Configuration
public class ApiGatewayConfig {

  @Autowired
  private ApiFilter apiFilter;

  @Bean
  public RouteLocator gatewayRoutes(RouteLocatorBuilder builder) {
    return builder.routes()
        .route("registration-api", r -> r.path("/api/customers/**")
            .uri("http://localhost:8081"))
        .route("login-api", r -> r.path("/api/customer/**")
            .uri("http://localhost:8082"))
        .route("addmoney-api", r -> r.path("/api/money/**")
        		.filters(f -> f.filters(apiFilter))
                .uri("http://localhost:8083"))
        .route("moneytransfer-api", r -> r.path("/api/moneytransfer/**")
        		.filters(f -> f.filters(apiFilter))	
                .uri("http://localhost:8084"))
        .route("wallettobanktransfer-api", r -> r.path("/api/wallettobanktransfer/**")
        		.filters(f -> f.filters(apiFilter))
                .uri("http://localhost:8085"))
             
        .build();
  }
}


