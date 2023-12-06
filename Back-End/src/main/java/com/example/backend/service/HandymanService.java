package com.example.backend.service;

import com.example.backend.exception.UserNotFoundException;
import com.example.backend.model.Handyman;
import com.example.backend.model.Services;
import com.example.backend.repo.HandymanRepo;
import com.example.backend.repo.ServiceRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.Set;


@Service
public class HandymanService {
    private final HandymanRepo handymanRepo;
    @Autowired
    private ServiceRepo serviceRepo;
    @Autowired
    public HandymanService(HandymanRepo handymanRepo) {
        this.handymanRepo = handymanRepo;
    }

    //the big 5
    public Handyman addHandyman(Handyman handyman){
        return handymanRepo.save(handyman);
    }

    public List<Handyman> findAllHandymans(){
        return handymanRepo.findAll();
    }
    public Handyman updateHandyman(Long id, Handyman updatedHandyman){

        Handyman existingHandyman = handymanRepo.findById(Math.toIntExact(id))
                .orElseThrow(() -> new EntityNotFoundException("Handyman not found with id: " + id));

        existingHandyman.setName(updatedHandyman.getName());
        existingHandyman.setEmail(updatedHandyman.getEmail());
        existingHandyman.setPassword(updatedHandyman.getPassword());
        existingHandyman.setImageURL(updatedHandyman.getImageURL());
        existingHandyman.setPhoneNumber(updatedHandyman.getPhoneNumber());

        existingHandyman.setServices(updatedHandyman.getServices());
        existingHandyman.setBookings(updatedHandyman.getBookings());

        return handymanRepo.save(existingHandyman);
    }

    public Handyman findHandymanById(int id){
        return handymanRepo.findHandymanByHandymanId(id)
                .orElseThrow(() -> new UserNotFoundException("Handymen by id:"+id+" was not found"));
    }

    public Handyman findHandymanByEmail(String email){
        return handymanRepo.findByEmail(email).orElseThrow();
    }

    public void deleteHandyman(int id){

        handymanRepo.findByHandymanId(id).ifPresent(handymanRepo::delete);
    }
    //end of big 5
    public Set<Services> getServicesByHandymanId(Integer handymanId) {
        return handymanRepo.findByHandymanId(handymanId)
                .map(Handyman::getServices) // Get the set of services for the handyman
                .orElse(Collections.emptySet()); // Return an empty set if the handyman is not found
    }
    public Set<Handyman> getHandymenByServiceId(Integer serviceId) {
        return serviceRepo.findById(serviceId)
                .map(Services::getHandymen) // Get the set of handymen for the service
                .orElse(Collections.emptySet()); // Return an empty set if the service is not found
    }

    public Optional<Handyman> authHandyman(String email, String password){
        Optional<Handyman> handymanOptional = handymanRepo.findByEmail(email);

        if (handymanOptional.isPresent() && handymanOptional.get().getPassword().equals(password)) {
            return handymanOptional;
        }

        return Optional.empty();
    }

    public boolean existsByEmail(String email) {
        return handymanRepo.existsByEmail(email);
    }
}
