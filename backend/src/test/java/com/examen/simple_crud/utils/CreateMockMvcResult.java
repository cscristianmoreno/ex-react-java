package com.examen.simple_crud.utils;

import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.ResultActions;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;

public abstract class CreateMockMvcResult {
    
    public static MockHttpServletResponse response(final MockMvc mockMvc, final MockHttpServletRequestBuilder builder) throws Exception {
        ResultActions resultActions = mockMvc.perform(builder);
        MvcResult result = resultActions.andReturn();
        MockHttpServletResponse response = result.getResponse();
        
        return response;
    }
}
