import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyHttpserviceComponent } from './my-httpservice.component';

describe('MyHttpserviceComponent', () => {
  let component: MyHttpserviceComponent;
  let fixture: ComponentFixture<MyHttpserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyHttpserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHttpserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
