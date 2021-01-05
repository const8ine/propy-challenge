import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundComponent } from './components/sound/sound.component';
import { NameComponent } from './components/name/name.component';
import {RouterModule} from "@angular/router";
import {IconModule} from "../icon/app-icon.module";

@NgModule({
  declarations: [SoundComponent, NameComponent],
  exports: [
    NameComponent,
    SoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    IconModule
  ]
})
export class AnimalModule { }
