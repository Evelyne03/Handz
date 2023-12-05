package com.example.backend.service;


import com.example.backend.exception.UserNotFoundException;
import com.example.backend.model.Services;
import com.example.backend.model.Services;
import com.example.backend.repo.ServiceRepo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class ServicesService {
    private final ServiceRepo servicesRepo;

    public ServicesService(ServiceRepo serviceRepo) {
        this.servicesRepo = serviceRepo;
    }

    public List<Services> getAllServices() {
        return servicesRepo.findAll();
    }
    public List<Services> getServicesByExpertise(String expertise) {
        return servicesRepo.findByExpertise(expertise);
    }
    public Services addServices(Services services){
        return servicesRepo.save(services);
    }
    public Services updateServices(Services services){
        return servicesRepo.save(services);
    }

    public Services findServicesById(int id){
        return servicesRepo.findServicesByServiceId(id)
                .orElseThrow(() -> new UserNotFoundException("Service by id:"+id+" was not found"));
    }
    public void deleteServices(int id){
        servicesRepo.deleteServicesByServiceId(id);
    }
    
    
}
