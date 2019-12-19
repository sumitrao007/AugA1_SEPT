import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryparameterComponent } from './queryparameter.component';

describe('QueryparameterComponent', () => {
  let component: QueryparameterComponent;
  let fixture: ComponentFixture<QueryparameterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryparameterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryparameterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
