import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryallcarsComponent } from './queryallcars.component';

describe('QueryallcarsComponent', () => {
  let component: QueryallcarsComponent;
  let fixture: ComponentFixture<QueryallcarsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryallcarsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryallcarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
