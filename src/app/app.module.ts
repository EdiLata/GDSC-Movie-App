import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {CardComponent} from './card/card.component';
import {AppRoutingModule} from "./app-routing.module";
import {DetailsComponent} from './details/details.component';
import {SafePipe} from './details/safe.pipe';
import { FilterComponent } from './filter/filter.component';
import { ChipComponent } from './chip/chip.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    DetailsComponent,
    SafePipe,
    FilterComponent,
    ChipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
