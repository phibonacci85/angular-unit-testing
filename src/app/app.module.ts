import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RoutingModule } from './routing/routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { KarmaComponent } from './karma/karma.component';
import { JasmineComponent } from './jasmine/jasmine.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PrismModule } from '@ngx-prism/core';
import { ScenariosComponent } from './scenarios/scenarios.component';
import { CodeSampleComponent } from './code-sample/code-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    KarmaComponent,
    JasmineComponent,
    HomeComponent,
    PageNotFoundComponent,
    ScenariosComponent,
    CodeSampleComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PrismModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
