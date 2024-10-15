package com.examen.simple_crud.entity;

import jakarta.persistence.Entity;
import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
public class Persons extends BaseEntity {
    private String name;
    private String lastname;
    private int age;
    private int dni;
    private String country;
}
