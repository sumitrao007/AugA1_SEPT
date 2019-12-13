import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchdemoComponent } from './switchdemo.component';

describe('SwitchdemoComponent', () => {
  let component: SwitchdemoComponent;
  let fixture: ComponentFixture<SwitchdemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchdemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchdemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
