package com.examen.simple_crud.models.exceptions;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;

import com.examen.simple_crud.dto.ResponseEntityDTO;

public interface IControllerException<T> {
    @ExceptionHandler(value = Exception.class)
    ResponseEntity<ResponseEntityDTO<T>> exceptionResponse(Exception exception);
}
