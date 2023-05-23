// Angular modules
import {HttpClientModule}     from '@angular/common/http';
import {NgModule}             from '@angular/core';
import {BrowserModule}        from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import {AppComponent}         from './app.component';
import {FeedListComponent} from "./components/feed-list/feed-list.component";
import {EntryDetailsModalComponent} from "./components/entry-details-modal/entry-details-modal.component";

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [
    AppComponent,
    FeedListComponent,
    EntryDetailsModalComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
