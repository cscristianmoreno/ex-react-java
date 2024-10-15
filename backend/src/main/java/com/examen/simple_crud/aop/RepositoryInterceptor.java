package com.examen.simple_crud.aop;

import java.lang.reflect.Field;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;

import com.examen.simple_crud.entity.BaseEntity;

import jakarta.persistence.Id;

@Aspect
@Component
public class RepositoryInterceptor {
 
    @Pointcut("execution(* com.examen.simple_crud.services.*.update(..))")
    public void methodUpdateInterceptor() {

    }

    @Before("methodUpdateInterceptor()")
    public void methodUpdate(JoinPoint joinPoint) throws IllegalArgumentException, IllegalAccessException {
        Object args = joinPoint.getArgs()[0];
        Field[] fields = BaseEntity.class.getDeclaredFields();

        for (Field field: fields) {
            if (!field.isAnnotationPresent(Id.class)) {
                continue;
            }

            field.setAccessible(true);
            int id = field.getInt(args);

            if (id == 0) {
                throw new IllegalArgumentException("ID is required to update entity");
            }
        }
    }
}
