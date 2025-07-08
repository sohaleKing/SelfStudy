import { TestBed } from '@angular/core/testing';

import { PrasServiceHttp } from './pras-service-http';

describe('PrasServiceHttp', () => {
  let service: PrasServiceHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrasServiceHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
