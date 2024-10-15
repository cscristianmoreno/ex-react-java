package com.examen.simple_crud.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.examen.simple_crud.entity.Persons;
import com.examen.simple_crud.models.services.IPersonsRepositoryService;
import com.examen.simple_crud.repository.PersonsRepository;

@Service
public class PersonsRepositoryService implements IPersonsRepositoryService {

    private final PersonsRepository personsRepository;

    public PersonsRepositoryService(final PersonsRepository personsRepository) {
        this.personsRepository = personsRepository;
    }
    
    @Override
    public Persons save(Persons entity) {
        return personsRepository.save(entity);
    }

    @Override
    public Persons update(Persons entity) {
        return personsRepository.save(entity);
    }

    @Override
    public Optional<Persons> findById(int id) {
        return personsRepository.findById(id);
    }

    @Override
    public List<Persons> findAll() {
        return personsRepository.findAll();
    }

    @Override
    public void deleteById(int id) {
        personsRepository.deleteById(id);
    }

    @Override
    public void deleteAll() {
        personsRepository.deleteAll();
    }
    
}
