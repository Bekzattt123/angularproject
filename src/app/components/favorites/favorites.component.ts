// components/favorites/favorites.component.ts
import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import {NgForOf} from '@angular/common';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  imports: [
    NgForOf,
    RouterLink
  ],
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {
  favorites: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.favorites = this.movieService.getFavorites();
  }

  removeFavorite(movieId: number) {
    this.movieService.removeFavorite(movieId);
    this.favorites = this.movieService.getFavorites();
  }
}
