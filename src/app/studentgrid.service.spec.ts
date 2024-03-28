import { TestBed } from '@angular/core/testing';

import { StudentgridService } from './studentgrid.service';

describe('StudentgridService', () => {
  let service: StudentgridService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentgridService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
