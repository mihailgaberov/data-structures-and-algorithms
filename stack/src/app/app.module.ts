import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material';

import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {routes, navigatableComponents} from './app.routing';
import {Stack} from './utils/stack';

// main angular module
@NgModule({
  declarations: [
    AppComponent,

    // our components are imported here in the main module
    ...navigatableComponents
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    // our routes are used here
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,

    // material module
    MatButtonModule
  ],
  providers: [
    Stack
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
