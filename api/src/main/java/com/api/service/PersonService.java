package com.api.service;

import com.api.dto.PersonDTO;
import com.api.model.Person;

import java.util.List;

public interface PersonService {

    Person dtoToEntity(PersonDTO personDTO);

    List<Person> list();

    Person get(Long id);

    Person save(PersonDTO personDTO);

    void delete(Long id);

    Long count();
}
