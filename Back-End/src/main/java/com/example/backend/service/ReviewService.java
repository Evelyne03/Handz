package com.example.backend.service;

import com.example.backend.exception.UserNotFoundException;
import com.example.backend.model.Handyman;
import com.example.backend.model.Review;
import com.example.backend.model.User;
import com.example.backend.repo.HandymanRepo;
import com.example.backend.repo.ReviewRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class ReviewService {
    private final ReviewRepo reviewRepo;
    @Autowired
    private HandymanRepo handymanRepo; // Assuming you have a HandymanRepo

    @Autowired
    public ReviewService(ReviewRepo reviewRepo) {
        this.reviewRepo = reviewRepo;
    }

    // The big 5
    public Review addReview(Review review) {
        return reviewRepo.save(review);
    }

    public List<Review> findAllReviews() {
        return reviewRepo.findAll();
    }

    public Review updateReview(Review review) {
        return reviewRepo.save(review);
    }

    public Review findReviewById(int id) {
        return reviewRepo.findReviewByReviewId(id)
                .orElseThrow(() -> new UserNotFoundException("Review by id:" + id + " was not found"));
    }

    public void deleteReview(int id) {
        reviewRepo.findByReviewId(id).ifPresent(reviewRepo::delete);
    }

}

