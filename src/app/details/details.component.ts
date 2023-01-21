import { Component, OnInit } from '@angular/core';
import {MovieService} from "../services/movie.service";
import {IMovie} from "../models/movie.model";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: string = '';
  movie!: IMovie;
  constructor(private readonly _movieService: MovieService, private readonly _router: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._router.snapshot.params['id'];
    this.movie = this._movieService.getMovieByID(this.id);
  }

}
