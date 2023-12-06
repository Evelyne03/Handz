package com.example.backend.model;

import jakarta.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;

@Entity
@Table(name = "Reviews")
public class Review implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column
    private int reviewId;

    @ManyToOne
    @JoinColumn(name = "userId", referencedColumnName = "userId")
    private User user;

    @ManyToOne
    @JoinColumn(name = "handymanId", referencedColumnName = "handymanId")
    private Handyman handyman;

    @Column
    private LocalDateTime reviewTime;

    @Column
    private int rating;

    @Column
    private String description;

    public Review() {
    }

    public Review(int reviewId, User user, Handyman handyman, LocalDateTime reviewTime, int rating, String description) {
        this.reviewId = reviewId;
        this.user = user;
        this.handyman = handyman;
        this.reviewTime = reviewTime;
        this.rating = rating;
        this.description = description;
    }

    public int getReviewId() {
        return reviewId;
    }

    public void setReviewId(int reviewId) {
        this.reviewId = reviewId;
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

    public LocalDateTime getReviewTime() {
        return reviewTime;
    }

    public void setReviewTime(LocalDateTime reviewTime) {
        this.reviewTime = reviewTime;
    }

    public int getRating() {
        return rating;
    }

    public void setRating(int rating) {
        this.rating = rating;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    @Override
    public String toString() {
        return "Review{" +
                "reviewId=" + reviewId +
                ", user=" + user +
                ", handyman=" + handyman +
                ", reviewTime=" + reviewTime +
                ", rating=" + rating +
                ", description='" + description + '\'' +
                '}';
    }
}

