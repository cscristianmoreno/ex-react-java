package com.examen.simple_crud.exceptions;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;

import com.examen.simple_crud.dto.ResponseEntityDTO;
import com.examen.simple_crud.models.exceptions.IControllerException;
import com.examen.simple_crud.utils.ResponseEntityUtil;

@ControllerAdvice
public class ControllerException implements IControllerException<String> {

    @Override
    public ResponseEntity<ResponseEntityDTO<String>> exceptionResponse(Exception exception) {
        return ResponseEntityUtil.unauthorized(exception.getMessage());
    }
    
}
