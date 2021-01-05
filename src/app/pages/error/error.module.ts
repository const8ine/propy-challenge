import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ErrorComponent} from "./error.component";
import {RouterModule} from "@angular/router";
import {ERROR_ROUTES} from "./error-routing";
import {IconModule} from "../../shared/ui-modules/icon/app-icon.module";

@NgModule({
  declarations: [
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ERROR_ROUTES),
    IconModule,
  ]
})
export class ErrorModule { }
