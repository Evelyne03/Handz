package com.example.backend.service;

import com.example.backend.exception.UserNotFoundException;
import com.example.backend.model.User;
import com.example.backend.repo.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.backend.model.User;

import java.util.List;

@Service
public class UserService {

    private final UserRepo UserRepo;

    @Autowired
    public UserService(UserRepo UserRepo) {
        this.UserRepo = UserRepo;
    }
    public User addUser(User User){
        return UserRepo.save(User);
    }

    public List<User> findAllUsers(){
        return UserRepo.findAll();
    }
    public User updateUser(User User){
        return UserRepo.save(User);
    }

    public User findUserById(int id){
        return UserRepo.findUserById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id:"+id+" was not found"));
    }
    public void deleteUser(int id){
        UserRepo.deleteUserById(id);
    }
}
