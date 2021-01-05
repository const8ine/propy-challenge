import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HomeComponent} from "./home.component";
import {RouterModule} from "@angular/router";
import {HOME_ROUTES} from './home-routing';
import {AnimalModule} from "../../shared/ui-modules/animal/animal.module";

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(HOME_ROUTES),
    AnimalModule,
  ]
})
export class HomeModule { }
