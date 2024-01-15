package com.example.backend.controller;


import com.example.backend.model.Handyman;
import com.example.backend.model.User;
import com.example.backend.model.User;
import com.example.backend.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    @GetMapping("/all")
    public ResponseEntity<List<User>> getAllUser(){
        List<User> users = userService.findAllUsers();
        return new ResponseEntity<>(users, HttpStatus.OK);
    }
    @GetMapping("/find/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id") int id){
        User user = userService.findUserById(id);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<?> addUser(@RequestBody User user){
        // Check for duplicate email before saving
        if(userService.existsByEmail(user.getEmail())) {
            return ResponseEntity
                    .status(HttpStatus.BAD_REQUEST)
                    .body("Error: Email already exists!");
        }

        User newUser =userService.addUser(user);
        return new ResponseEntity<>(newUser, HttpStatus.CREATED);
    }
    @PutMapping("/change_password/{userId}")
    public ResponseEntity<?> changePassswordToUser(@PathVariable int userId,@RequestBody String newPassword){
        userService.changePassword(userId,newPassword);
        return new ResponseEntity<>("Password changed succesfully",HttpStatus.OK);
    }
    @PutMapping("/update")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        User updateUser =userService.updateUser(user);
        return new ResponseEntity<>(updateUser, HttpStatus.OK);
    }

    @DeleteMapping ("/delete/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable("id") int id){
        userService.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> user) throws IllegalAccessException {
        String email = user.get("email");
        String password = user.get("password");
        try {
            User handyman = userService.findHandymanByEmail(email);
            if(!handyman.getPassword().equals(password))
                throw new IllegalAccessException("Invalid password");
            return ResponseEntity.status(HttpStatus.OK).body(handyman);
        } catch (IllegalAccessException e){
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(e.getMessage());
        }
    }
}
