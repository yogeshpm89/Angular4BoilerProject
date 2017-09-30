import { TestBed, inject } from '@angular/core/testing';

import { AppWebStorageService } from './app-web-storage.service';

describe('AppWebStorageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppWebStorageService]
    });
  });

  it('should be created', inject([AppWebStorageService], (service: AppWebStorageService) => {
    expect(service).toBeTruthy();
  }));
});
