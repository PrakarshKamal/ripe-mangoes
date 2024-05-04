package com.prakarsh.movies;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

// Created MovieRepository interface to handle the database operations for reviews
@Repository
public interface ReviewRepository extends MongoRepository<Review, ObjectId>{


}
