import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovieService } from './services/movie.service';
import { FormsModule } from '@angular/forms';

import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { HeaderComponent } from './components/header/header.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import { FavoritesComponent } from './components/favorites/favorites.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    MovieDetailsComponent,
    MovieListComponent,
    HeaderComponent,
    PopularMoviesComponent,
    TopRatedMoviesComponent,
    FavoritesComponent
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
