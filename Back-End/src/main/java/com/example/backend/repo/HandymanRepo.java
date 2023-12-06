package com.example.backend.repo;

import com.example.backend.model.Handyman;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
@Repository
public interface HandymanRepo extends JpaRepository<Handyman , Integer> {


    Optional<Handyman> findByHandymanId(Integer handymanId);
    Optional<Handyman> findHandymanByHandymanId(int id);
    Optional<Handyman> findByEmail(String email);

}
