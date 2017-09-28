import { TestBed, inject } from '@angular/core/testing';

import { AppLabelService } from './app-label.service';

describe('AppLabelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppLabelService]
    });
  });

  it('should be created', inject([AppLabelService], (service: AppLabelService) => {
    expect(service).toBeTruthy();
  }));
});
