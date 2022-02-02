import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddImgButtonComponent } from './add-img-button.component';

describe('AddImgButtonComponent', () => {
  let component: AddImgButtonComponent;
  let fixture: ComponentFixture<AddImgButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddImgButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddImgButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
