import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormValidationsComponent } from './basic-form-validations.component';

describe('BasicFormComponent', () => {
  let component: BasicFormValidationsComponent;
  let fixture: ComponentFixture<BasicFormValidationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BasicFormValidationsComponent],
    });
    fixture = TestBed.createComponent(BasicFormValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
