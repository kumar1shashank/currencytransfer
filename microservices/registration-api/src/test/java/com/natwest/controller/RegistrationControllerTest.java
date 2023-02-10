package com.natwest.controller;

import org.junit.jupiter.api.Test;


import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.natwest.exception.EmailIdAlreadyExist;
import com.natwest.model.Registration;
import com.natwest.service.RegistrationService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(RegistrationController.class)
public class RegistrationControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private RegistrationService regService;

    @Autowired
    private ObjectMapper objectMapper;

    @Test
    public void addCustomer_whenValidRequest_thenReturn201() throws Exception {
        Registration customer = new Registration();
        customer.setFname("Rahul");
        customer.setLname("Thakur");
        customer.setEmail("thakurt@gmail.com");
        customer.setCuspass("password");
        customer.setConfirmpass("password");
        customer.setWalletaccount(12345678);
        customer.setWalletbalance(0);

        when(regService.addcus(any(Registration.class))).thenReturn(customer);

        mockMvc.perform(post("/api/customers/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(customer)))
                .andExpect(status().isCreated());
    }

    @Test
    public void addCustomer_whenEmailAlreadyExist_thenReturn409() throws Exception {
        Registration customer = new Registration();
        customer.setFname("Rahul");
        customer.setLname("Thakur");
        customer.setEmail("thakurt@gmail.com");
        customer.setCuspass("password");
        customer.setConfirmpass("password");
        customer.setWalletaccount(12345678);
        customer.setWalletbalance(0);

        when(regService.addcus(any(Registration.class))).thenThrow(new EmailIdAlreadyExist("Email Id Already Exist"));

        mockMvc.perform(post("/api/customers/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(customer)))
                .andExpect(status().isConflict());
    }
}
