import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import {RouterLink} from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  imports: [
    RouterLink,
    NgForOf,
    NgIf
  ],
  styleUrls: ['./top-rated-movies.component.css']
})
export class TopRatedMoviesComponent implements OnInit {
  movies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTopRatedMovies().subscribe(response => {
      this.movies = response;
    });
  }
  addToFavorites(movie: any) {
    this.movieService.addFavorite(movie);
  }

}
