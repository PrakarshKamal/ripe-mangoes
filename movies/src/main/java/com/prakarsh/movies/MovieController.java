package com.prakarsh.movies;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

// MovieController class to handle the requests to api/v1/movies
@RestController
@RequestMapping("api/v1/movies")
@CrossOrigin(origins = "*")
public class MovieController {

    @Autowired
    private MovieService movieService;

    @GetMapping
    // get all movies function to return all movies from the database
    public ResponseEntity<List<Movies>> getAllMovies() {
        return new ResponseEntity<List<Movies>>(movieService.allMovies(), HttpStatus.OK);
    }

    @GetMapping("/{imdbId}")
    // get movie by id function to return a movie by id from the database
    public ResponseEntity<Optional<Movies>> getSingleMovieById(@PathVariable String imdbId) {
        return new ResponseEntity<Optional<Movies>>(movieService.getSingleMovieById(imdbId), HttpStatus.OK);
    }
}
