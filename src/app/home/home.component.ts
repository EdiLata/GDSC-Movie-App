import { Component, OnInit } from '@angular/core';
import {MovieService} from "../services/movie.service";
import {IMovie} from "../models/movie.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: IMovie[] = [];
  constructor(private readonly _movieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this._movieService.getMovies();
  }

}
