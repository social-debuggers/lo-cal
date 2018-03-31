import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessEditComponent } from './business-edit.component';

describe('BusinessEditComponent', () => {
  let component: BusinessEditComponent;
  let fixture: ComponentFixture<BusinessEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
