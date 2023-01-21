import { Component, OnInit } from '@angular/core';
import {MovieService} from "../services/movie.service";
import {IMovie} from "../models/movie.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies: IMovie[] = [];
  constructor(private readonly _movieService: MovieService, private readonly _router: Router) { }

  ngOnInit(): void {
    this.movies = this._movieService.getMovies();
  }

  redirectToMovie(id: string) {
    this._router.navigate(['details/' + id]);
  }
}
