import {Injectable} from '@angular/core';
import {mockMovies} from "../mock-data/mock-movies";
import {IMovie} from "../models/movie.model";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() {
  }

  getMovies(): IMovie[] {
    return mockMovies;
  }

  getMovieByID(ID: string): IMovie {
    let searchedMovie: any = [];
    mockMovies.forEach((movie: IMovie) => {
      if (movie.id === ID) {
        searchedMovie = movie;
      }
    });
    return searchedMovie;
  }

  getCategories(): string[] {
    let categories: string[] = [];
    mockMovies.forEach((movie: IMovie) => {
      let ok = 1;
      for (let i = 0; i < categories.length; i++) {
        if (categories[i] === movie.category) {
          ok = 0;
        }
      }
      if (ok === 1) {
        categories.push(movie.category);
      }
    });
    return categories;
  }
}
