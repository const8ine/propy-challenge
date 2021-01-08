import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app-routing';
import {HttpClientModule} from '@angular/common/http';
import {FirebaseModule} from './core/modules/firebase.module';
import {HeaderModule} from './components/ui-components/header/header.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule,
    FirebaseModule,
    HeaderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
