package com.natwest.controller;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.natwest.model.Registration;
import com.natwest.service.LoginService;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

@ExtendWith(MockitoExtension.class)
class LoginControllerTest {
  private MockMvc mockMvc;

  @Mock
  private LoginService loginService;

  @InjectMocks
  private LoginController loginController;

  @BeforeEach
  public void setUp() {
    mockMvc = MockMvcBuilders.standaloneSetup(loginController).build();
  }

  @Test
  public void testLogin_whenValidCredentials_thenReturnOk() throws Exception {
    Registration request = new Registration();
    request.setEmail("test@example.com");
    request.setCuspass("password");
    when(loginService.findByEmailAndCuspass("test@example.com", "password"))
        .thenReturn(new Registration());
    mockMvc.perform(
        post("/api/customer/login")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"email\":\"test@example.com\",\"cuspass\":\"password\"}"))
        .andExpect(status().isOk());
  }

  @Test
  public void testLogin_whenInvalidCredentials_thenReturnUnauthorized() throws Exception {
    when(loginService.findByEmailAndCuspass("test@example.com", "wrong_password"))
        .thenReturn(null);
    mockMvc.perform(
        post("/api/customer/login")
            .contentType(MediaType.APPLICATION_JSON)
            .content("{\"email\":\"test@example.com\",\"cuspass\":\"wrong_password\"}"))
        .andExpect(status().isUnauthorized());
  }
}

