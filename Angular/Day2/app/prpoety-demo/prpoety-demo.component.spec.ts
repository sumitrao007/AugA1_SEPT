import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrpoetyDemoComponent } from './prpoety-demo.component';

describe('PrpoetyDemoComponent', () => {
  let component: PrpoetyDemoComponent;
  let fixture: ComponentFixture<PrpoetyDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrpoetyDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrpoetyDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
