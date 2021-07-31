package com.api._configuration.security;

import com.api._configuration.jwt.JwtTokenProvider;
import com.api.model.User;
import com.api.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.Optional;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtTokenProvider tokenProvider;

    @Autowired
    private UserService userService;

    @PostMapping("/api/user/registration")
    public ResponseEntity<?> register(@RequestBody User user) {
        // TODO: 7/28/2021
//        if (userService.findByUsername(user.getUsername()) != null) {
//            return new ResponseEntity<>(HttpStatus.CONFLICT);
//        }
        user.setRole("ROLE_USER");
        user.setEnabled(true);
        return new ResponseEntity<>(userService.save(user), HttpStatus.CREATED);
    }

    @GetMapping("/login")
    public ResponseEntity<?> getUser(Principal principal){
        if(principal == null){
            //logout will also use here so we should return ok http status.
            return ResponseEntity.ok(principal);
        }
        UsernamePasswordAuthenticationToken authenticationToken =
                (UsernamePasswordAuthenticationToken) principal;
        Optional<User> user = userService.findByUsername(authenticationToken.getName());
        if (user.isEmpty()) {
            throw new RuntimeException();
        }
        user.get().setToken(tokenProvider.generateToken(authenticationToken));

        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
