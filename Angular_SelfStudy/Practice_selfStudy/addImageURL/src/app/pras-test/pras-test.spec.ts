import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrasTest } from './pras-test';

describe('PrasTest', () => {
  let component: PrasTest;
  let fixture: ComponentFixture<PrasTest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrasTest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrasTest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
