package com.natwest.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.natwest.exception.EmailIdAlreadyExist;
import com.natwest.model.Registration;
import com.natwest.dao.RegistrationRepo;
import com.natwest.service.RegistrationServiceImp;

@ExtendWith(MockitoExtension.class)
public class RegistrationServiceImpTest {
	
	@InjectMocks
	private RegistrationServiceImp registrationServiceImp;
	
	@Mock
	private BCryptPasswordEncoder bCryptPasswordEncoder;
	
	@Mock
	private RegistrationRepo regisrepo;
	
	private Registration customer1, customer2;
	private Optional<Registration> optional;
	private List<Registration> customerList;
	
	@BeforeEach
	void setUp() {
		customer1 = new Registration( "John", "Doe", "john.doe@gmail.com", "password", "password", 12345678);
		customer2 = new Registration( "Jane", "Doe", "jane.doe@gmail.com", "password", "password",12345678);
		optional = Optional.of(customer1);
		customerList = Arrays.asList(customer1, customer2);
	}
	
	@Test
	void testAddCustomer_Success() throws EmailIdAlreadyExist {
		when(regisrepo.findById(customer1.getEmail())).thenReturn(Optional.empty());
		when(bCryptPasswordEncoder.encode(customer1.getCuspass())).thenReturn("encoded_password");
		when(bCryptPasswordEncoder.encode(customer1.getConfirmpass())).thenReturn("encoded_password");
		when(regisrepo.save(customer1)).thenReturn(customer1);
		
		Registration customer = registrationServiceImp.addcus(customer1);
		
		assertThat(customer).isEqualTo(customer1);
		assertThat(customer.getCuspass()).isEqualTo("encoded_password");
		assertThat(customer.getConfirmpass()).isEqualTo("encoded_password");
	}
	
	@Test
	void testAddCustomer_EmailIdAlreadyExist() {
		when(regisrepo.findById(customer1.getEmail())).thenReturn(Optional.of(customer1));
		
		try {
			registrationServiceImp.addcus(customer1);
			fail("Expected EmailIdAlreadyExist exception");
		} catch (EmailIdAlreadyExist e) {
			assertEquals("Email-id already registered with us", e.getMessage());
		}
	}
	
}
	
	
	

