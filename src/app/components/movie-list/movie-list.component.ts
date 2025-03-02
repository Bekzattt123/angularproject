import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import {FormsModule} from '@angular/forms';
import {NgForOf, NgIf} from '@angular/common';
import {SafeHtmlPipe} from '../../pipes/safe-html.pipe';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  imports: [
    FormsModule,
    NgForOf,
    NgIf,
    SafeHtmlPipe,
    RouterLink
  ],
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: any[] = [];
  searchQuery = '';

  constructor(private movieService: MovieService) { }

  search(): void {
    if (this.searchQuery.trim()) {
      this.movieService.searchMovies(this.searchQuery).subscribe(
        (response: any[]) => this.movies = response.map((item: any) => item.show),
        (error) => console.error('Error fetching movies', error)
      );
    }
  }
  addToFavorites(movie: any) {
    this.movieService.addFavorite(movie);
  }

}
