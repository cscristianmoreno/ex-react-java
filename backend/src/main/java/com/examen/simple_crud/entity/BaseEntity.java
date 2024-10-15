package com.examen.simple_crud.entity;

import java.util.Date;

import jakarta.persistence.Id;
import jakarta.persistence.MappedSuperclass;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@MappedSuperclass
public class BaseEntity {
    @Id
    private int id;

    private Date register;
}
