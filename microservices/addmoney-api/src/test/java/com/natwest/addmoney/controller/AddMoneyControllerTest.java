package com.natwest.addmoney.controller;




import org.junit.jupiter.api.Test;

import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.natwest.addmoney.controller.AddMoneyController;
import com.natwest.addmoney.exception.TransactionsNotFound;
import com.natwest.addmoney.model.AddMoney;
import com.natwest.addmoney.service.AddMoneyService;

@WebMvcTest(AddMoneyController.class)
public class AddMoneyControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private AddMoneyService addMoneyService;

    @Test
    public void testAddMoneyInWallet() throws Exception {
        AddMoney addMoney = new AddMoney();
        addMoney.setWalletaccount(1234567890);
        addMoney.setAmount(100.0);

        when(addMoneyService.addmoneytowallet(addMoney)).thenReturn(addMoney);

        mockMvc.perform(post("/api/money/addmoney")
                .content(new ObjectMapper().writeValueAsString(addMoney))
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isAccepted());
    }

    @Test
    public void testGetHistorySuccess() throws Exception {
        List<AddMoney> history = new ArrayList<>();
        AddMoney addMoney = new AddMoney();
        addMoney.setWalletaccount(1234567890);
        addMoney.setAmount(100.0);
        addMoney.setTransactiondatetime(LocalDateTime.now());
        history.add(addMoney);

        when(addMoneyService.findByAccount(1234567890)).thenReturn(history);

        mockMvc.perform(get("/api/money/addmoney/history/1234567890")
                .accept(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());
    }
}

