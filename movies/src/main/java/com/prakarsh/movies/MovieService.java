package com.prakarsh.movies;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

// Created MovieService class to handle the database access
@Service
public class MovieService {
    
    @Autowired
    private MovieRepository movieRepository;

    // get all movies function to return all movies from the database
    public List<Movies> allMovies() {
        return movieRepository.findAll();
    }

    public Optional<Movies> getSingleMovieById(String imdbId) {
        return movieRepository.findMovieByImdbId(imdbId);
    }
}
