import { TestBed } from '@angular/core/testing';

import { DictionaryAPIService } from './dictionary-api.service';

describe('DictionaryAPIService', () => {
  let service: DictionaryAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DictionaryAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
