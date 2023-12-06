package com.example.backend.repo;

import com.example.backend.model.Handyman;
import com.example.backend.model.Review;
import com.example.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface ReviewRepo extends JpaRepository<Review, Integer> {

    Optional<Review> findByReviewId(Integer reviewId);
    Optional<Review> findReviewByReviewId(int id);


}

