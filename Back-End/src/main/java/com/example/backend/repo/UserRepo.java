package com.example.backend.repo;


import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User, Integer> {
    void deleteUserById(int id);

    Optional<User> findUserById(int id);//in case you give a random id

}
