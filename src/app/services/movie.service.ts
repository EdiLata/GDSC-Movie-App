import { Injectable } from '@angular/core';
import {mockMovies} from "../mock-data/mock-movies";
import {IMovie} from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }

  getMovies(): IMovie[] {
    return mockMovies;
  }

  getMovieByID(ID: string): IMovie {
    let searchedMovie: any = [];
    mockMovies.forEach((movie: IMovie) => {
      if(movie.id === ID) {
        searchedMovie = movie;
      }
    });
    return searchedMovie;
  }
}
