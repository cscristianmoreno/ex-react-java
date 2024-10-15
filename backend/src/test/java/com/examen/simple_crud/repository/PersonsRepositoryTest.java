package com.examen.simple_crud.repository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.examen.simple_crud.entity.Persons;
import com.examen.simple_crud.utils.CreatePersonInstance;

@SpringBootTest
public class PersonsRepositoryTest {
    
    @Autowired
    private PersonsRepository personsRepository;

    private Persons persons;

    @BeforeEach
    void setup() {
        persons = CreatePersonInstance.getPersons();
    }

    @Test
    void testSave() {
        Persons result = personsRepository.save(persons);

        assertNotNull(result);
        assertEquals(persons.getDni(), result.getDni());
    }

    @Test
    void testFindAll() {
        List<Persons> result = personsRepository.findAll();

        assertNotNull(result);
        assertTrue(result.size() > 0);
    }

    @Test
    void testFindById() {
        Optional<Persons> persons = personsRepository.findById(1);

        assertNotNull(persons);
        assertTrue(persons.isPresent());
    }

    @Test
    void testUpdate() {
        persons.setId(1);
        persons.setAge(25);
        persons.setDni(128466539);
        Persons result = personsRepository.save(persons);

        assertNotNull(result);
        assertEquals(persons.getAge(), result.getAge());
    }
}
