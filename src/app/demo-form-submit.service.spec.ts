import { TestBed } from '@angular/core/testing';

import { DemoFormSubmitService } from './demo-form-submit.service';

describe('DemoFormSubmitService', () => {
  let service: DemoFormSubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoFormSubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
