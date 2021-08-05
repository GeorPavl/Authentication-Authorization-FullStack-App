package com.api.service;

import com.api.dto.PersonDTO;
import com.api.model.Person;
import com.api.model.User;
import com.api.repository.PersonRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PersonServiceImpl implements PersonService{

    @Autowired
    private PersonRepository personRepository;
    @Autowired
    private UserService userService;

    @Override
    public Person dtoToEntity(PersonDTO personDTO) {
        Person person = new Person();
        BeanUtils.copyProperties(personDTO, person);
        if (personDTO.getUserId() != null) {
            User user = userService.get(personDTO.getUserId());
            person.setUser(user);
        }
        return person;
    }

    @Override
    public List<Person> list() {
        return null;
    }

    @Override
    public Person get(Long id) {
        return null;
    }

    @Override
    public Person save(PersonDTO personDTO) {
        return null;
    }

    @Override
    public void delete(Long id) {

    }

    @Override
    public Long count() {
        return null;
    }
}
