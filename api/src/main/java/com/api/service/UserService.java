package com.api.service;

import com.api.model.User;

import java.util.List;
import java.util.Optional;

public interface UserService {

    List<User> findAll();

    User get(Long id);

    User save(User user);

    void delete(Long userId);

    Optional<User> findByUsername(String username);

    Long count();
}
