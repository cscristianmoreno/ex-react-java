package com.examen.simple_crud.services;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;
import static org.mockito.BDDMockito.*;
import static org.mockito.Mockito.verify;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import com.examen.simple_crud.entity.Persons;
import com.examen.simple_crud.repository.PersonsRepository;
import com.examen.simple_crud.utils.CreatePersonInstance;

@ExtendWith(MockitoExtension.class)
public class PersonsRepositoryServiceTest {

    @Mock
    private PersonsRepository personsRepository;

    @InjectMocks
    private PersonsRepositoryService personsRepositoryService;
    
    private Persons persons;

    @BeforeEach
    void setup() {
        persons = CreatePersonInstance.getPersons();
    }

    @Test
    void testSave() {
        given(personsRepository.save(persons)).willReturn(persons);

        Persons result = personsRepositoryService.save(persons);

        assertNotNull(result);
        assertEquals(persons, result);
    }

    @Test
    void testUpdate() {
        persons.setId(1);
        given(personsRepository.save(persons)).willReturn(persons);

        Persons result = personsRepositoryService.update(persons);

        assertNotNull(result);
        assertEquals(persons, result);

        System.out.println(persons);
        System.out.println(result);
    }

    @Test
    void testFindById() {
        given(personsRepository.findById(1)).willReturn(Optional.of(persons));

        Optional<Persons> result = personsRepositoryService.findById(1);

        assertNotNull(result);
        assertTrue(result.isPresent());
    }

    @Test
    void testFindAll() {
        given(personsRepository.findAll()).willReturn(List.of(persons));

        List<Persons> result = personsRepositoryService.findAll();

        assertNotNull(result);
        assertTrue(result.size() > 0);
    }

    @Test
    void testDeleteById() {
        willDoNothing().given(personsRepository).deleteById(1);

        personsRepositoryService.deleteById(1);

        verify(personsRepository).deleteById(1);
    }

    @Test
    void testDeleteAll() {
        willDoNothing().given(personsRepository).deleteAll();

        personsRepositoryService.deleteAll();

        verify(personsRepository).deleteAll();
    }
}
