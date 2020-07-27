import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryaspecificcarComponent } from './queryaspecificcar.component';

describe('QueryaspecificcarComponent', () => {
  let component: QueryaspecificcarComponent;
  let fixture: ComponentFixture<QueryaspecificcarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryaspecificcarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryaspecificcarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
