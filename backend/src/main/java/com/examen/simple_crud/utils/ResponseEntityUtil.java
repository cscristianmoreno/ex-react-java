package com.examen.simple_crud.utils;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import com.examen.simple_crud.dto.ResponseEntityDTO;

public abstract class ResponseEntityUtil {
    public static <T> ResponseEntity<ResponseEntityDTO<T>> ok(T value) {
        ResponseEntityDTO<T> responseEntityDTO = new ResponseEntityDTO<T>(HttpStatus.OK, value);
        return ResponseEntity.ok(responseEntityDTO);
    }

    public static <T> ResponseEntity<ResponseEntityDTO<T>> unauthorized(T reason) {
        ResponseEntityDTO<T> responseEntityDTO = new ResponseEntityDTO<T>(HttpStatus.UNAUTHORIZED, reason);
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(responseEntityDTO);
    } 
}
