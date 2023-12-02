package com.example.backend.service;

import org.springframework.stereotype.Service;
import com.example.backend.model.Users;
import com.example.backend.controllers.UserController;
import java.time.LocalDate;
import java.util.List;

@Service
public class UserService {
    public List<Users> getUsers(){
        return List.of(
                new Users(
                        1,
                        "Jon",
                        "eu@yahoo.com",
                        "da-madrq",
                        LocalDate.now()

                )
        );
    }
}
