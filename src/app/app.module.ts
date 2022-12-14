import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksMainComponent } from './books-main/books-main.component';
import { SearchPipe } from './books-main/search.pipe';
import { SortPipe } from './books-main/sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BooksMainComponent,
    SearchPipe,
    SortPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
