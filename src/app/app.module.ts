import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { BrowserComponent } from './components/browser/browser.component';
import { MainingComponent } from './components/maining/maining.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoaderComponent } from './components/maining/loader/loader.component';
import { ErrorComponent } from './components/maining/error/error.component';
import { ResponseComponent } from './components/maining/response/response.component'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    BrowserComponent,
    MainingComponent,
    LoaderComponent,
    ErrorComponent,
    ResponseComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
