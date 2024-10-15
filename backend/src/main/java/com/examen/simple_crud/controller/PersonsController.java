package com.examen.simple_crud.controller;

import java.util.List;
import java.util.Optional;

import org.springdoc.core.annotations.RouterOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.examen.simple_crud.dto.ResponseEntityDTO;
import com.examen.simple_crud.entity.Persons;
import com.examen.simple_crud.models.controller.IController;
import com.examen.simple_crud.services.PersonsRepositoryService;
import com.examen.simple_crud.utils.ResponseEntityUtil;

@Controller
@ResponseBody
@RequestMapping("/persons")
@RouterOperation
public class PersonsController implements IController<Persons> {

    @Autowired
    private final PersonsRepositoryService personsRepositoryService;

    public PersonsController(final PersonsRepositoryService personsRepositoryService) {
        this.personsRepositoryService = personsRepositoryService;
    }

    @Override
    public ResponseEntity<ResponseEntityDTO<Persons>> save(Persons entity) {
        Persons persons = personsRepositoryService.save(entity);
        return ResponseEntityUtil.ok(persons);
    }

    @Override
    public ResponseEntity<ResponseEntityDTO<Persons>> update(Persons entity) {
        Persons persons = personsRepositoryService.update(entity);
        return ResponseEntityUtil.ok(persons);
    }

    @Override
    public ResponseEntity<ResponseEntityDTO<Optional<Persons>>> findById(int id) {
        Optional<Persons> persons = personsRepositoryService.findById(id);
        return ResponseEntityUtil.ok(persons);
    }

    @Override
    public ResponseEntity<ResponseEntityDTO<List<Persons>>> findAll() {
        List<Persons> persons = personsRepositoryService.findAll();
        return ResponseEntityUtil.ok(persons);
    }

    @Override
    public ResponseEntity<ResponseEntityDTO<String>> deleteById(int id) {
        personsRepositoryService.deleteById(id);
        return ResponseEntityUtil.ok("Person with id " + "#" + id + " delete succefully");
    }

    @Override
    public ResponseEntity<ResponseEntityDTO<String>> deleteAll() {
        return ResponseEntityUtil.ok("All persons delete succefully");
    }
}
