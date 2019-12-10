import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassbindingComponent } from './classbinding.component';

describe('ClassbindingComponent', () => {
  let component: ClassbindingComponent;
  let fixture: ComponentFixture<ClassbindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClassbindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
