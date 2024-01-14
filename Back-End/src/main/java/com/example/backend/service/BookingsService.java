package com.example.backend.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.example.backend.exception.UserNotFoundException;
import com.example.backend.model.Bookings;
import com.example.backend.model.*;
import com.example.backend.repo.BookingRepo;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import lombok.extern.slf4j.Slf4j;


@Service
public class BookingsService {
    private final BookingRepo bookingRepo;
    private final HandymanService handymanService; // Inject HandymanService
    private final UserService userService; // Inject UserService
    private final ServicesService servicesService; // Inject ServicesService
    private static final Logger logger = LoggerFactory.getLogger(BookingsService.class);

    public BookingsService(BookingRepo bookingRepo, HandymanService handymanService, UserService userService, ServicesService servicesService) {
        this.bookingRepo = bookingRepo;
        this.handymanService = handymanService;
        this.userService = userService;
        this.servicesService = servicesService;
    }


    public Bookings addBooking(Bookings bookingRequest) {

        logger.info("Received booking request - User: {}, Handyman: {}, Service: {}, Booking Time: {}, Status: {}",
                bookingRequest.getUser(),
                bookingRequest.getHandyman(),
                bookingRequest.getService(),
                bookingRequest.getBookingTime(),
                bookingRequest.getStatus());

        // Create a new booking
        // Set Handyman, Customer, Service, and Booking Time
        int handymanId = bookingRequest.getHandyman().getId();
        logger.info("Attempting to find Handyman by ID----: {}", handymanId);
        Handyman handyman = handymanService.findHandymanById(handymanId);
        logger.info("Found Handyman: {}", handyman);
        // Fetch Handyman, User, and Service entities from the database based on provided IDs

        User user = userService.findUserById(bookingRequest.getUser().getUser_id());
        Services service = servicesService.findServicesById(bookingRequest.getService().getService_Id());

        // Create a new booking
        Bookings booking = new Bookings();

        // Set Handyman, Customer, Service, and Booking Time
        booking.setHandyman(handymanService.findHandymanById(bookingRequest.getHandyman().getId()));
        booking.setUser(user);
        booking.setService(service);
        booking.setBookingTime(LocalDateTime.now()); // You can adjust this based on your requirements

        // Save the booking to the database
        return bookingRepo.save(booking);
    }

    public List<Bookings> findAllBookings(){
        return bookingRepo.findAll();
    }
    public Bookings updateBookings(Integer bookingId,Bookings bookingRequest){

        Bookings existingBooking = bookingRepo.findById(bookingId)
                .orElseThrow(() -> new EntityNotFoundException("Booking not found with id: " + bookingId));

        // Update Handyman, Customer, Service, and Booking Time
        existingBooking.setHandyman(bookingRequest.getHandyman());
        existingBooking.setUser(bookingRequest.getUser());
        existingBooking.setService(bookingRequest.getService());
        existingBooking.setBookingTime(LocalDateTime.now()); // You can adjust this based on your requirements

        // Save the updated booking to the database
        return bookingRepo.save(existingBooking);
    }

    public Bookings findBookingsById(int booking_id){
        return bookingRepo.findBookingsByBookingId(booking_id)
                .orElseThrow(() -> new UserNotFoundException("Handymen by booking_id:"+booking_id+" was not found"));
    }
    public void deleteBookings(int booking_id){
        bookingRepo.deleteBookingsByBookingId(booking_id);
    }

    public String getBookingStatus(Integer bookingId) {
        Optional<Bookings> optionalBooking = bookingRepo.findById(bookingId);

        return optionalBooking.map(Bookings::getStatus).orElse(null);
    }
    public Bookings add123Booking(Integer userId, Integer handymanId, Integer serviceId) {
        Bookings newBooking = new Bookings();
        logger.info("Attempting to find Handyman by ID----: {}", handymanId);

        Handyman handyman = handymanService.findHandymanById(handymanId);
        //logger.info("Found Handyman: {}", handyman);

        User user = userService.findUserById(userId);
        Services services = servicesService.findServicesById(serviceId);

        newBooking.setUser(user);  // Assuming you have a constructor in User that accepts userId
        newBooking.setHandyman(handyman);  // Assuming you have a constructor in Handyman that accepts handymanId
        newBooking.setService(services);  // Assuming you have a constructor in Services that accepts serviceId

        newBooking.setStatus("Pending");
        newBooking.setBookingTime(LocalDateTime.now());
        


        return bookingRepo.save(newBooking);
    }
}
