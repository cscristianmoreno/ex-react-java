package com.examen.simple_crud;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class SimpleCrudApplication {

	public static void main(String[] args) {
		Dotenv.configure().systemProperties().load();
		SpringApplication.run(SimpleCrudApplication.class, args);
	}

}
