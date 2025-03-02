import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';
import { PopularMoviesComponent } from './components/popular-movies/popular-movies.component';
import { TopRatedMoviesComponent } from './components/top-rated-movies/top-rated-movies.component';
import {FavoritesComponent} from './components/favorites/favorites.component';

const routes: Routes = [
  { path: '', component: MovieListComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'popular', component: PopularMoviesComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'top-rated', component: TopRatedMoviesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
