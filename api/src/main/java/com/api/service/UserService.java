package com.api.service;

import com.api.dto.UserDTO;
import com.api.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    User dtoToEntity(UserDTO userDTO);

    List<User> list();

    User get(Long id);

    User save(UserDTO userDTO);

    void delete(Long userId);

    Optional<User> findByUsername(String username);

    Long count();

    Boolean checkEncodedPassword(String encodedPassword, String password);
}
