import {Component, OnInit} from '@angular/core';
import {HttpService} from "../../services/http.service";
import {EntryData} from "../../interfaces/reddit-feed.interface";
import {MatSelectChange} from "@angular/material/select";
import {MatDialog} from '@angular/material/dialog';
import {EntryDetailsModalComponent} from "../entry-details-modal/entry-details-modal.component";

@Component({
  selector: 'feed-list',
  templateUrl: './feed-list.component.html',
  styleUrls: ['./feed-list.component.scss']
})
export class FeedListComponent implements OnInit {
  entries: EntryData[];
  after: string | null;
  before: string[] = [];
  entriesOnPage: number = 25;
  entriesDisplayOptions = [
    {value: 5, viewValue: 'Display 5 items'},
    {value: 10, viewValue: 'Display 10 items'},
    {value: 25, viewValue: 'Display 25 items'},
  ];
  requestInProgress: boolean = false;

  constructor(private httpService: HttpService, public dialog: MatDialog) {}

  ngOnInit() {
    this.fetchFeed(this.entriesOnPage);
  }

  onEntriesOnPageChange(e: MatSelectChange) {
    this.before = [];
    this.fetchFeed(e.value);
  }

  openEntryDetails(entry: EntryData) {
    this.dialog.open(EntryDetailsModalComponent, {data: entry});
  }

  //before is always null in api response, so it can't be used for nav history
  navigateNext(): void {
    this.before.push(this.after as string);
    this.fetchFeed(this.entriesOnPage, this.after);
  }

  navigateBack(): void {
    this.before.pop();
    const next = this.before.length ? this.before[this.before.length -1] : '';
    this.fetchFeed(this.entriesOnPage, next as string);
  }

  private fetchFeed(numberOfEntries: number, next: string | null = null): void {
    this.requestInProgress = true;
    this.httpService.fetchEntries(numberOfEntries, next).then(res => {
      this.after = res.data.after;
      this.entries = res.data.children.map((el) => {
        return {...el.data};
      });
      this.requestInProgress = false;
    }).catch(err => {
      console.log(`Error while fetching data from the API: ${err}`);
      this.requestInProgress = false;
    });
  }
}
