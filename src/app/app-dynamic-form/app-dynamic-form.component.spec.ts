import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDynamicFormComponent } from './app-dynamic-form.component';

describe('AppDynamicFormComponent', () => {
  let component: AppDynamicFormComponent;
  let fixture: ComponentFixture<AppDynamicFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDynamicFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDynamicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
