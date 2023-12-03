package com.example.backend.repo;

import com.example.backend.model.Handyman;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface HandymanRepo extends JpaRepository<Handyman , Integer> {

    void deleteHandymanById(int id);

    Optional<Handyman> findHandymanById(int id);//in case you give a random id
}
