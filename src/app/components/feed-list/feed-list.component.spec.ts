import {FeedListComponent} from "./feed-list.component";
import {TestBed} from "@angular/core/testing";
import {HttpService} from "../../services/http.service";
import {MatDialog} from "@angular/material/dialog";
import {mockResponse} from "../../../assets/test/mock-response";

describe("FeedListComponent", ()=> {
  let component: FeedListComponent;
  let fixture;
  let fetchEntriesSpy: any;
  let goBackSpy: any;
  beforeEach(()=> {
    let httpService = jasmine.createSpyObj('HttpService', ['fetchEntries']);
    fetchEntriesSpy = httpService.fetchEntries.and.returnValue(new Promise((resolve, reject) => {
        resolve(mockResponse);
    }));

    TestBed.configureTestingModule({
      providers: [
        FeedListComponent,
        { provide: HttpService, useValue: httpService },
        { provide: MatDialog, useValue: {}}
      ]
    });

    fixture = TestBed.createComponent(FeedListComponent);
    component = fixture.componentInstance;
  });

  it('should navigate to next set of entries on navigateNext', () => {
    component.navigateNext();

    expect(fetchEntriesSpy.calls.any()).toBe(true);
  });

  it('should navigate to previous set of entries on navigateBack', () => {
    component.before = ['testValue1', 'testValue2'];
    component.navigateBack();

    expect(fetchEntriesSpy.calls.argsFor(0)).toEqual([25,'testValue1']);
  });
});
