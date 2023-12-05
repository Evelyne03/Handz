package com.example.backend.controller;

import com.example.backend.model.Handyman;
import com.example.backend.model.Services;
import com.example.backend.model.Services;
import com.example.backend.service.HandymanService;
import com.example.backend.service.ServicesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/services")
public class ServiceController {

    @Autowired
    private ServicesService servicesService;

    @GetMapping("/all")
    public List<Services> getAllServices() {
        return servicesService.getAllServices();
    }
    
    @GetMapping("/find/{id}")
    public ResponseEntity<Services> getServicesById(@PathVariable("id") int id){
        Services services = servicesService.findServicesById(id);
        return new ResponseEntity<>(services, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Services> addServices(@RequestBody Services services){
        Services newServices =servicesService.addServices(services);
        return new ResponseEntity<>(newServices, HttpStatus.CREATED);
    }

    @PutMapping("/update")
    public ResponseEntity<Services> updateServices(@RequestBody Services services){
        Services updateServices =servicesService.updateServices(services);
        return new ResponseEntity<>(updateServices, HttpStatus.OK);
    }

    @DeleteMapping ("/delete/{id}")
    public ResponseEntity<?> deleteServices(@PathVariable("id") int id){
        servicesService.deleteServices(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    @GetMapping("/filter")
    public List<Services> getServicesByExpertise(@RequestParam String expertise) {
        return servicesService.getServicesByExpertise(expertise);
    }


}
