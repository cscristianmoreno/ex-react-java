package com.examen.simple_crud.dotenv;

import org.junit.jupiter.api.Test;

import io.github.cdimascio.dotenv.Dotenv;
import io.github.cdimascio.dotenv.DotenvBuilder;

public class DotenvTest {

    @Test
    public void test() {
        Dotenv dotenv = Dotenv.configure().systemProperties().load();
    }
    
}
