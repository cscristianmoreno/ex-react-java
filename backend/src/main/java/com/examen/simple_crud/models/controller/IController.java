package com.examen.simple_crud.models.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.examen.simple_crud.dto.ResponseEntityDTO;

public interface IController<T> {
    @PostMapping("/save")
    ResponseEntity<ResponseEntityDTO<T>> save(@RequestBody T entity);
    
    @PutMapping("/update")
    ResponseEntity<ResponseEntityDTO<T>> update(@RequestBody T entity);
    
    @GetMapping("/{id}")
    ResponseEntity<ResponseEntityDTO<Optional<T>>> findById(@PathVariable int id);
    
    @GetMapping("/all")
    ResponseEntity<ResponseEntityDTO<List<T>>> findAll();
    
    @DeleteMapping("/{id}")
    ResponseEntity<ResponseEntityDTO<String>> deleteById(@PathVariable int id);
    
    @DeleteMapping("/all")
    ResponseEntity<ResponseEntityDTO<String>> deleteAll();
}
