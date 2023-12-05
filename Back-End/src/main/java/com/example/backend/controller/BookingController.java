package com.example.backend.controller;

import com.example.backend.model.Bookings;
import com.example.backend.service.BookingsService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    private final BookingsService bookingsService;

    public BookingController(BookingsService bookingsService) {
        this.bookingsService = bookingsService;
    }

    //the big 5

    @GetMapping("/all")
    public ResponseEntity<List<Bookings>> getAllHands(){
        List<Bookings> handymen = bookingsService.findAllBookings();
        return new ResponseEntity<>(handymen, HttpStatus.OK);
    }

    @GetMapping("/find/{booking_id}")
    public ResponseEntity<Bookings> getBookingsById(@PathVariable("booking_id") int booking_id){
        Bookings bookings = bookingsService.findBookingsById(booking_id);
        return new ResponseEntity<>(bookings, HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<Bookings> addBookings(@RequestBody Bookings bookings){
        Bookings newBookings =bookingsService.addBooking(bookings);
        return new ResponseEntity<>(newBookings, HttpStatus.CREATED);
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
