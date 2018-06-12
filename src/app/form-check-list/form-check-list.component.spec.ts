import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCheckListComponent } from './form-check-list.component';

describe('FormCheckListComponent', () => {
  let component: FormCheckListComponent;
  let fixture: ComponentFixture<FormCheckListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormCheckListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCheckListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
