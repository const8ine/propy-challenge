import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { APP_ROUTES } from './app-routing';
import { HeaderComponent } from './header/header.component';
import {HttpClientModule} from "@angular/common/http";
import {IconModule} from "./shared/icon/app-icon.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(APP_ROUTES),
    IconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
