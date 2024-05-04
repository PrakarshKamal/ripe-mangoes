package com.prakarsh.movies;

import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

// Created MovieRepository interface to handle the database operations
@Repository
public interface MovieRepository extends MongoRepository<Movies, ObjectId>{

    Optional<Movies> findMovieByImdbId(String imdbId);
}
