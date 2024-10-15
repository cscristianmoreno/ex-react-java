package com.examen.simple_crud.utils;

import com.examen.simple_crud.entity.Persons;

public abstract class CreatePersonInstance {
    
    public static Persons getPersons() {
        Persons persons = new Persons();
        // persons.setId(1);
        persons.setName("Cristian");
        persons.setLastname("Moreno");
        persons.setCountry("Argentina");
        persons.setAge(27);
        persons.setDni(132392819);

        return persons;
    }
}
