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
}
