import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoundComponent } from './sound/sound.component';
import { NameComponent } from './name/name.component';

@NgModule({
  declarations: [SoundComponent, NameComponent],
  imports: [
    CommonModule
  ]
})
export class AnimalModule { }
