import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DetailsComponent} from "./details/details.component";

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'details/:id', component: DetailsComponent
  },
  {
    path: '', redirectTo: '/home', pathMatch: "full"
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
