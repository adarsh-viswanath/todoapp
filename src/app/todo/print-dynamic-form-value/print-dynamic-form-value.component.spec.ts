import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintDynamicFormValueComponent } from './print-dynamic-form-value.component';

describe('PrintDynamicFormValueComponent', () => {
  let component: PrintDynamicFormValueComponent;
  let fixture: ComponentFixture<PrintDynamicFormValueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintDynamicFormValueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrintDynamicFormValueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
