import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import {Location, NgIf} from '@angular/common';
import { SafeHtmlPipe } from '../../pipes/safe-html.pipe';  // Import Location service

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  imports: [
    NgIf,
    SafeHtmlPipe
  ],
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  movieId: string | null = null;
  movie: any;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location  // Inject Location service
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.movieId = id;
      this.fetchMovieDetails();
    } else {
      console.error('Movie ID not found');
    }
  }

  fetchMovieDetails(): void {
    if (this.movieId) {
      this.movieService.getMovieDetails(this.movieId).subscribe(
        (response: any) => this.movie = response,
        (error) => console.error('Error fetching movie details', error)
      );
    } else {
      console.error('Movie ID is null');
    }
  }

  goBack(): void {
    this.location.back();  // Go back to the previous page
  }
}
