package com.examen.simple_crud.repository;

import java.util.List;

import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.data.repository.CrudRepository;

import com.examen.simple_crud.entity.Persons;

@EnableJpaRepositories
public interface PersonsRepository extends CrudRepository<Persons, Integer> {
    List<Persons> findAll();
}
