package com.example.backend.repo;

import com.example.backend.model.Services;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;
@Repository

public interface ServiceRepo extends JpaRepository<Services, Integer> {


    List<Services> findByExpertise(String expertise);
    Optional<Services> findByServiceId(Integer serviceId);

    Optional<Services> findServicesByServiceId(int id);

    void deleteServicesByServiceId(int id);

    @Query(value = "SELECT * FROM services s WHERE s.bookingId = ?", nativeQuery = true)
    Services findServicesByBookingId(int bookingId);
}
