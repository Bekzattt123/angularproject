import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import {RouterLink} from '@angular/router';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-popular-movies',
  templateUrl: './popular-movies.component.html',
  imports: [
    RouterLink,
    NgForOf
  ],
  styleUrls: ['./popular-movies.component.css']
})
export class PopularMoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(response => {
      this.movies = response;
    });
  }
  addToFavorites(movie: any) {
    this.movieService.addFavorite(movie);
  }

}
