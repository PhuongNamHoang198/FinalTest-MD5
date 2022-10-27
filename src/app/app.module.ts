import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TourListComponent } from './tour/tour-list/tour-list.component';
import {HttpClientModule} from "@angular/common/http";
import {TourRoutingModule} from "./tour-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import { TourCreateComponent } from './tour/tour-create/tour-create.component';
import { TourEditComponent } from './tour/tour-edit/tour-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    TourListComponent,
    TourCreateComponent,
    TourEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TourRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
