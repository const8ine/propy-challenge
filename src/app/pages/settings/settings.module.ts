import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SettingsComponent} from "./settings.component";
import {RouterModule} from "@angular/router";
import {SETTINGS_ROUTES} from "./settings-routing";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ListboxModule} from 'primeng/listbox';
import {AnimalModule} from "../../shared/animal/animal.module";
import {MessageModule} from "primeng/message";

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SETTINGS_ROUTES),
    ReactiveFormsModule,
    ListboxModule,
    FormsModule,
    AnimalModule,
    MessageModule,
  ]
})
export class SettingsModule { }
