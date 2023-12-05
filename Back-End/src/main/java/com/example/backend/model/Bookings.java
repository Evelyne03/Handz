package com.example.backend.model;


import jakarta.persistence.*;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Entity
@Table
public class Bookings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private int bookingId;
    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private User user;
    @ManyToOne
    @JoinColumn(name = "handymanId", referencedColumnName = "handymanId")
    private Handyman handyman;

    @ManyToOne
    @JoinColumn(name = "serviceId", referencedColumnName = "serviceId")
    private Services service;
    @Column
    private LocalDateTime bookingTime;

    public Bookings() {
    }

    @Override
    public String toString() {
        return "Bookings{" +
                "bookingId=" + bookingId +
                ", user=" + user +
                ", handyman=" + handyman +
                ", service=" + service +
                ", bookingTime=" + bookingTime +
                '}';
    }

    public int getBookingId() {
        return bookingId;
    }

    public void setBookingId(int bookingId) {
        this.bookingId = bookingId;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Handyman getHandyman() {
        return handyman;
    }

    public void setHandyman(Handyman handyman) {
        this.handyman = handyman;
    }

    public Services getService() {
        return service;
    }

    public void setService(Services service) {
        this.service = service;
    }

    public LocalDateTime getBookingTime() {
        return bookingTime;
    }

    public void setBookingTime(LocalDateTime bookingTime) {
        this.bookingTime = bookingTime;
    }

    public Bookings(int bookingId, User user, Handyman handyman, Services service,
                    LocalDateTime bookingTime) {
        this.bookingId = bookingId;
        this.user = user;
        this.handyman = handyman;
        this.service = service;
        this.bookingTime = bookingTime;
    }
}
