package com.natwest.controller;

import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;

import java.util.List;


import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;

import com.natwest.exception.AccountNumberNotFound;
import com.natwest.model.MoneyTransfer;
import com.natwest.service.MoneyTransferService;

@ExtendWith(SpringExtension.class)
@WebMvcTest(MoneyTransferController.class)
public class MoneyTransferControllerTest {

  @Autowired
  private MockMvc mockMvc;

  @MockBean
  private MoneyTransferService moneyTransferService;

  @Test
  public void testGetSendDetails_Success() throws Exception {
    List<MoneyTransfer> transfers = new ArrayList<>();
    transfers.add(new MoneyTransfer());

    when(moneyTransferService.findBySenderaccount("123456"))
        .thenReturn(transfers);

    mockMvc.perform(get("/api/moneytransfer/send/123456"))
        .andExpect(status().isOk());
  }

  @Test
  public void testGetSendDetails_AccountNumberNotFound() throws Exception {
    when(moneyTransferService.findBySenderaccount("123456"))
        .thenThrow(new AccountNumberNotFound("Account not found"));

    mockMvc.perform(get("/api/moneytransfer/send/123456"))
        .andExpect(status().isNotFound());
  }

  @Test
  public void testGetReceiveDetails_Success() throws Exception {
    List<MoneyTransfer> transfers = new ArrayList<>();
    transfers.add(new MoneyTransfer());

    when(moneyTransferService.findByReceiveraccount("123456"))
        .thenReturn(transfers);

    mockMvc.perform(get("/api/moneytransfer/receive/123456"))
        .andExpect(status().isOk());
  }
 
}
