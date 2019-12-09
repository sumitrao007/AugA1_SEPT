import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MycompponentComponent } from './mycompponent.component';

describe('MycompponentComponent', () => {
  let component: MycompponentComponent;
  let fixture: ComponentFixture<MycompponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MycompponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MycompponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
