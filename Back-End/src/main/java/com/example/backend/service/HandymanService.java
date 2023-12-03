package com.example.backend.service;

import com.example.backend.exception.UserNotFoundException;
import com.example.backend.model.Handyman;
import com.example.backend.repo.HandymanRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class HandymanService {
    private final HandymanRepo handymanRepo;

    @Autowired
    public HandymanService(HandymanRepo handymanRepo) {
        this.handymanRepo = handymanRepo;
    }
    public Handyman addHandyman(Handyman handyman){
        return handymanRepo.save(handyman);
    }

    public List<Handyman> findAllHandymans(){
        return handymanRepo.findAll();
    }
    public Handyman updateHandyman(Handyman handyman){
        return handymanRepo.save(handyman);
    }

    public Handyman findHandymanById(int id){
        return handymanRepo.findHandymanById(id)
                .orElseThrow(() -> new UserNotFoundException("User by id:"+id+" was not found"));
    }
    public void deleteHandyman(int id){
        handymanRepo.deleteHandymanById(id);
    }




}
