import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';

import {NgReduxModule, DevToolsExtension} from 'ng2-redux';
import { CounterActions } from '../actions/counter.actions';
import { SearchActions } from '../actions/search.actions';

import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/header/header.component';
import { CounterComponent } from '../components/counter/counter.component';
import { SearchComponent } from '../components/search/search.component';
import { CounterInfoComponent } from '../components/counter-info/counter-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CounterComponent,
    SearchComponent,
    CounterInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CommonModule,
    NgReduxModule.forRoot()
  ],
  providers: [
    CounterActions,
    SearchActions,
    DevToolsExtension,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
