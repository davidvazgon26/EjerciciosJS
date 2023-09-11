import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormMaterialiconsComponent } from './basic-form-materialicons.component';

describe('BasicFormMaterialiconsComponent', () => {
  let component: BasicFormMaterialiconsComponent;
  let fixture: ComponentFixture<BasicFormMaterialiconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFormMaterialiconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormMaterialiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
