package com.example.backend.service;


import com.example.backend.exception.UserNotFoundException;
import com.example.backend.model.Bookings;
import com.example.backend.repo.BookingRepo;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookingsService {
    private final BookingRepo bookingRepo;

    public BookingsService(BookingRepo bookingRepo) {
        this.bookingRepo = bookingRepo;
    }

    public Bookings addBooking(Bookings booking){
        return bookingRepo.save(booking);
    }

    public List<Bookings> findAllBookings(){
        return bookingRepo.findAll();
    }
    public Bookings updateBookings(Bookings bookings){
        return bookingRepo.save(bookings);
    }

    public Bookings findBookingsById(int booking_id){
        return bookingRepo.findBookingsByBookingId(booking_id)
                .orElseThrow(() -> new UserNotFoundException("Handymen by booking_id:"+booking_id+" was not found"));
    }
    public void deleteBookings(int booking_id){
        bookingRepo.deleteBookingsByBookingId(booking_id);
    }
    
    
}
