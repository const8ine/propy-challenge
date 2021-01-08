import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from "./settings.component";
import { RouterModule } from "@angular/router";
import { SETTINGS_ROUTES } from "./settings-routing";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AnimalModule } from "../../ui-components/ui-modules/animal/animal.module";
import { ButtonModule } from "../../ui-components/ui-modules/button/button.module";
import { ListboxModule } from 'primeng/listbox';
import { MessageModule } from "primeng/message";
import { ProgressSpinnerModule } from 'primeng/progressspinner';

const PRIMENG_MODULES = [
  ListboxModule,
  MessageModule,
  ProgressSpinnerModule,
];

@NgModule({
  declarations: [
    SettingsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SETTINGS_ROUTES),
    ReactiveFormsModule,
    FormsModule,
    AnimalModule,
    ButtonModule,
    ...PRIMENG_MODULES,
  ]
})
export class SettingsModule {
}
