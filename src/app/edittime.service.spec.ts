import { TestBed } from '@angular/core/testing';

import { EdittimeService } from './edittime.service';

describe('EdittimeService', () => {
  let service: EdittimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EdittimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
