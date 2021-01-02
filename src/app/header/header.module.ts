import { NgModule } from '@angular/core';
import {HeaderComponent} from "./header.component";
import {IconModule} from "../shared/icon/app-icon.module";
import {ButtonModule} from "../shared/button/button.module";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    ButtonModule,
    IconModule,
    RouterModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
