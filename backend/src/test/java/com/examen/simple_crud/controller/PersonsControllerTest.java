package com.examen.simple_crud.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.mock.web.MockHttpServletResponse;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockHttpServletRequestBuilder;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;

import com.examen.simple_crud.entity.Persons;
import com.examen.simple_crud.utils.CreateMockMvcResult;
import com.examen.simple_crud.utils.CreatePersonInstance;
import com.fasterxml.jackson.databind.ObjectMapper;

import jakarta.servlet.http.HttpServletResponse;

@SpringBootTest
@AutoConfigureMockMvc
public class PersonsControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    private Persons persons;

    @BeforeEach
    void setup() {
        persons = CreatePersonInstance.getPersons();
    }

    @Test
    void testSave() throws Exception {
        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.post("/persons/save");
        builder.contentType(MediaType.APPLICATION_JSON);
        builder.accept(MediaType.APPLICATION_JSON);
        builder.content(objectMapper.writeValueAsString(persons));

        MockHttpServletResponse response = CreateMockMvcResult.response(mockMvc, builder);

        assertNotNull(response);
        assertEquals(HttpStatus.OK.value(), response.getStatus());
    }

    @Test
    void testUpdate() throws Exception {
        persons.setId(1);
        persons.setDni(176556389);

        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.put("/persons/update");
        builder.contentType(MediaType.APPLICATION_JSON);
        builder.accept(MediaType.APPLICATION_JSON);
        builder.content(objectMapper.writeValueAsString(persons));

        HttpServletResponse response = CreateMockMvcResult.response(mockMvc, builder);

        assertNotNull(response);
        assertEquals(HttpStatus.OK.value(), response.getStatus());
    }

    @Test
    void testFindAll() throws Exception {
        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.get("/persons/all");

        MockHttpServletResponse response = CreateMockMvcResult.response(mockMvc, builder);

        assertNotNull(response);
        assertEquals(HttpStatus.OK.value(), response.getStatus());
    }

    @Test
    void testFindById() throws Exception {
        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.get("/persons/{id}", 1);

        MockHttpServletResponse response = CreateMockMvcResult.response(mockMvc, builder);

        assertNotNull(response);
        assertEquals(HttpStatus.OK.value(), response.getStatus());
    }

    @Test
    void testDeleteAll() throws Exception {
        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.delete("/persons/all");

        MockHttpServletResponse response = CreateMockMvcResult.response(mockMvc, builder);

        assertNotNull(response);
        assertEquals(HttpStatus.OK.value(), response.getStatus());
    }

    @Test
    void testDeleteById() throws Exception {
        MockHttpServletRequestBuilder builder = MockMvcRequestBuilders.delete("/persons/{id}", 1);

        MockHttpServletResponse response = CreateMockMvcResult.response(mockMvc, builder);

        assertNotNull(response);
        assertEquals(HttpStatus.OK.value(), response.getStatus());
    }
}
