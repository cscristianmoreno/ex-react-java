package com.examen.simple_crud.dto;

import org.springframework.http.HttpStatus;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ResponseEntityDTO<T> {
    private HttpStatus status;
    private T data;

    public ResponseEntityDTO(final HttpStatus httpStatus, final T data) {
        this.status = httpStatus;
        this.data = data;
    }
}