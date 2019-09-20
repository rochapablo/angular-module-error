import { TestBed } from '@angular/core/testing';

import { PabloPaginationService } from './pablo-pagination.service';

describe('PabloPaginationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PabloPaginationService = TestBed.get(PabloPaginationService);
    expect(service).toBeTruthy();
  });
});
