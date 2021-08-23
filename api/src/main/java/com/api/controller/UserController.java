package com.api.controller;

import com.api._configuration.jwt.JwtTokenProvider;
import com.api.dto.UserDTO;
import com.api.model.User;
import com.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class UserController {

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private UserService userService;

    @GetMapping("/user/list")
    public ResponseEntity<List<?>> listUsers() {
        if (userService.list().isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        List<UserDTO> dtoList = new ArrayList<>();
        for (User user : userService.list()) {
            dtoList.add(new UserDTO(user));
        }
        return new ResponseEntity<>(dtoList, HttpStatus.OK);
    }

    @PostMapping("/user/save")
    public ResponseEntity<?> saveUser(@RequestBody UserDTO userDTO) {
        return new ResponseEntity<>(new UserDTO(userService.save(userDTO)), HttpStatus.CREATED);
    }

    @GetMapping("/user/get")
    public ResponseEntity<?> getUser(@RequestParam Long id) {
        User user = userService.get(id);
        if (user == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<>(new UserDTO(user), HttpStatus.OK);
    }

    @DeleteMapping("/user/delete")
    public ResponseEntity<?> deleteUser(@RequestParam Long id) {
        userService.delete(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/user/check-pass")
    public Boolean checkUserPassword(@RequestParam String password, @RequestParam Long id) {
        UserDTO userDTO = new UserDTO(userService.get(id));
        return userService.checkEncodedPassword(userDTO.getPassword(), password);
    }

}
