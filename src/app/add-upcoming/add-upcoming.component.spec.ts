import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUpcomingComponent } from './add-upcoming.component';

describe('AddUpcomingComponent', () => {
  let component: AddUpcomingComponent;
  let fixture: ComponentFixture<AddUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
