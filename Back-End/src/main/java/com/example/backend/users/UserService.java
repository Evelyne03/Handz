package com.example.backend.users;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class UserService {
    public List<Users> getUsers(){
        return List.of(
                new Handyman(
                        1,
                        "Jon",
                        "eu@yahoo.com",
                        "da-madrq",
                        LocalDate.now(),
                        "electrician"
                )
        );
    }
}
