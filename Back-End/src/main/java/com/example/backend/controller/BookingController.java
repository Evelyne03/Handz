package com.example.backend.controller;

import com.example.backend.DOT.BookingRequest;
import com.example.backend.model.Bookings;
import com.example.backend.model.Handyman;
import com.example.backend.model.Services;
import com.example.backend.model.User;
import com.example.backend.service.BookingsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:4200/")
public class BookingController {
    @Autowired
    private final BookingsService bookingsService;
    private static final Logger logger = LoggerFactory.getLogger(BookingController.class);

    public BookingController(BookingsService bookingsService) {
        this.bookingsService = bookingsService;
    }

    //the big 5

    @GetMapping("/all")
    public ResponseEntity<List<Bookings>> getAllHands(){
        List<Bookings> handymen = bookingsService.findAllBookings();
        return new ResponseEntity<>(handymen, HttpStatus.OK);
    }

    @GetMapping("/all/{userId}")
    public ResponseEntity<List<Bookings>> getAllBookingsByUserId(@PathVariable("userId") int userId){
        List<Bookings> bookings = bookingsService.findAllBookingsByUserId(userId);
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @GetMapping("/find/{booking_id}")
    public ResponseEntity<Bookings> getBookingsById(@PathVariable("booking_id") int booking_id){
        Bookings bookings = bookingsService.findBookingsById(booking_id);
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }
    @PostMapping("/add/{userId}/{handymanId}/{serviceId}")
    public ResponseEntity<Bookings> addBookingFromParameters(
            @PathVariable Integer userId,
            @PathVariable Integer handymanId,
            @PathVariable Integer serviceId) {

        // You can create a Booking object with the extracted parameters


        // Call the service to add the booking
        Bookings savedBooking = bookingsService.add123Booking(userId,handymanId,serviceId);

        return new ResponseEntity<>(savedBooking, HttpStatus.CREATED);
    }

    @GetMapping("/status/{bookingId}")
    public ResponseEntity<String> getBookingStatus(@PathVariable Integer bookingId) {
        String status = bookingsService.getBookingStatus(bookingId);

        if (status != null) {
            return ResponseEntity.ok(status);
        } else {
            // Handle the case where the booking with the given ID is not found
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/add")
    public ResponseEntity<?> addBooking(@RequestBody BookingRequest bookingRequest) {
        try {
            Bookings booking = bookingsService.addBooking(bookingRequest);
            return new ResponseEntity<>(booking, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error adding booking: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/confirm-booking/{bookingId}")
    public ResponseEntity<String> confirmBooking(@PathVariable Integer bookingId) {
        try {
            bookingsService.confirmBooking(bookingId);
            return new ResponseEntity<>("Booking confirmed successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error confirming booking: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/decline-booking/{bookingId}")
    public ResponseEntity<String> declineBooking(@PathVariable Integer bookingId) {
        try {
            bookingsService.declineBooking(bookingId);
            return new ResponseEntity<>("Booking declined successfully", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Error declining booking: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PutMapping("/update")
    public ResponseEntity<Bookings> updateBookings(@RequestBody Bookings bookings){
        Bookings updateBookings =bookingsService.updateBookings(bookings);
        return new ResponseEntity<>(updateBookings, HttpStatus.OK);
    }

    @DeleteMapping ("/delete/{booking_id}")
    public ResponseEntity<?> deleteBookings(@PathVariable("booking_id") int booking_id){
        bookingsService.deleteBookings(booking_id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
    
    
}
