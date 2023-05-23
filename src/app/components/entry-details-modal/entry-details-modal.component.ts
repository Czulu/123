import {Component, Inject} from '@angular/core';
import {EntryData} from "../../interfaces/reddit-feed.interface";
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'entry-details-modal',
  templateUrl: 'entry-details-modal.component.html',
})
export class EntryDetailsModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: EntryData) { }
}
