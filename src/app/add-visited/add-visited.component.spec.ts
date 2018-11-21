import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVisitedComponent } from './add-visited.component';

describe('AddVisitedComponent', () => {
  let component: AddVisitedComponent;
  let fixture: ComponentFixture<AddVisitedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVisitedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVisitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
