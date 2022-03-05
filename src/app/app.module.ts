import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookFlightComponent } from './components/book-flight/book-flight.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
import {MAT_DATE_LOCALE} from '@angular/material/core';
import { MaterialExampleModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';





@NgModule({
  declarations: [
    AppComponent,
    BookFlightComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    MaterialExampleModule,
    BrowserAnimationsModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: "th-TH" }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
