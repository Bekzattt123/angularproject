import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private API_URL = 'https://api.tvmaze.com/';

  constructor(private http: HttpClient) { }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}shows/${id}`);
  }

  searchMovies(query: string): Observable<any> {
    return this.http.get<any>(`${this.API_URL}search/shows?q=${query}`);
  }

  getPopularMovies(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}shows?page=1`);
  }

  getTopRatedMovies(): Observable<any> {
    return this.http.get<any>(`${this.API_URL}shows?page=2`);
  }

  // services/movie.service.ts
  addFavorite(movie: any): void {
    let favorites = this.getFavorites();
    if (!favorites.some((fav: any) => fav.id === movie.id)) {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  }

  removeFavorite(movieId: number): void {
    let favorites = this.getFavorites().filter((fav: any) => fav.id !== movieId);
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }

  getFavorites(): any[] {
    return JSON.parse(localStorage.getItem('favorites') || '[]');
  }

}
