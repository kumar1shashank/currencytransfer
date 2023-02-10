package com.natwest.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;

import org.junit.jupiter.api.BeforeEach;

import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import com.natwest.dao.LoginRepo;
import com.natwest.exception.CredentialsMisMatch;
import com.natwest.model.Registration;

@ExtendWith(MockitoExtension.class)
public class LoginServiceImpTest {

    @Mock
    private LoginRepo loginRepo;
    
    @Mock
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    @InjectMocks
    private LoginServiceImp loginServiceImp;

    private Registration request;

    @BeforeEach
    public void setUp() {
        request = new Registration();
        request.setEmail("test@email.com");
        request.setCuspass("password");
    }

    @Test
    public void testLoginSuccess() throws CredentialsMisMatch {
        Registration obj = new Registration();
        obj.setEmail(request.getEmail());
        obj.setCuspass(bCryptPasswordEncoder.encode(request.getCuspass()));
        when(loginRepo.findByEmailAndCuspass(any(), any())).thenReturn(obj);
        when(bCryptPasswordEncoder.matches(any(), any())).thenReturn(true);

        String result = loginServiceImp.login(request);

        assertEquals("You have logged in successfully", result);
    }

    @Test
    public void testLoginFail() {
        when(loginRepo.findByEmailAndCuspass(any(), any())).thenReturn(null);

        assertThrows(CredentialsMisMatch.class, () -> loginServiceImp.login(request));
    }

    @Test
    public void testFindByEmailAndCuspassSuccess() {
        Registration obj = new Registration();
        obj.setEmail(request.getEmail());
        obj.setCuspass(bCryptPasswordEncoder.encode(request.getCuspass()));
        when(loginRepo.findByEmail(any())).thenReturn(obj);
        when(bCryptPasswordEncoder.matches(any(), any())).thenReturn(true);

        Registration result = loginServiceImp.findByEmailAndCuspass(request.getEmail(), request.getCuspass());

        assertEquals(obj, result);
    }
    
    
    
    

}
