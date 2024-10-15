package com.examen.simple_crud.models;

import java.util.List;
import java.util.Optional;

public interface ICrudModel<T, S> {
    T save(S entity);
    
    T update(S entity);
    
    void deleteById(int id);

    void deleteAll();

    Optional<T> findById(int id);

    List<T> findAll();
}
