package com.api.service;

import com.api.dto.UserDTO;
import com.api.model.Person;
import com.api.model.User;
import com.api.repository.UserRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private PersonService personService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public User dtoToEntity(UserDTO userDTO) {
        User user = new User();
        BeanUtils.copyProperties(userDTO, user);
        if (userDTO.getPersonDTO() != null) {
            Person person = personService.dtoToEntity(userDTO.getPersonDTO());
            user.addPerson(person);
        }
        return user;
    }

    @Override
    public List<User> list() {
        return userRepository.findAll();
    }

    @Override
    public User get(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()) {
            return null;
        }
        return user.get();
    }

    @Override
    public User save(UserDTO userDTO) {
        User user = dtoToEntity(userDTO);
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setRole("ROLE_USER");
        user.setEnabled(true);
        return userRepository.save(user);
    }

    @Override
    public void delete(Long userId) {
        userRepository.deleteById(userId);
    }

    @Override
    public Optional<User> findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    @Override
    public Long count() {
        return userRepository.count();
    }
}
