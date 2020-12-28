import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundComponent } from './components/sound/sound.component';
import { NameComponent } from './components/name/name.component';
import {IconModule} from "../icon/app-icon.module";

@NgModule({
  declarations: [SoundComponent, NameComponent],
  exports: [
    NameComponent
  ],
  imports: [
    CommonModule,
    IconModule
  ]
})
export class AnimalModule { }
