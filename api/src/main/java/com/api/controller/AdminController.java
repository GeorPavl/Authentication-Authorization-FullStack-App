package com.api.controller;

import com.api._configuration.StringResponse;
import com.api.model.User;
import com.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

    @Autowired
    private UserService userService;

//    @PutMapping("/api/admin/user-update")
//    public ResponseEntity<?> updateUser(@RequestBody User user) {
//        Optional<User> existUser = userService.findByUsername(user.getUsername());
//        if (existUser.isEmpty()){
//            throw new RuntimeException();
//        }
//        if (existUser != null && !existUser.get().getId().equals(user.getId())) {
//            return new ResponseEntity<>(HttpStatus.CONFLICT);
//        }
//        return new ResponseEntity<>(userService.updateUser(user), HttpStatus.CREATED);
//    }

    //This can be also @DeleteMapping.
    @PostMapping("/api/admin/user-delete")
    public ResponseEntity<?> deleteUser(@RequestBody User user){
        userService.delete(user.getId());
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/api/admin/user-all")
    public ResponseEntity<?> findAllUsers(){
        return new ResponseEntity<>(userService.findAll(), HttpStatus.OK);
    }

    @GetMapping("/api/admin/user-number")
    public ResponseEntity<?> numberOfUsers(){
        Long number = userService.count();
        StringResponse response = new StringResponse();
        response.setResponse(number.toString());
        //to return it, we will use String Response because long is not a suitable response for rest api
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
