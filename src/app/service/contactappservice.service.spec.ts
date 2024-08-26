import { TestBed } from '@angular/core/testing';

import { ContactappserviceService } from './contactappservice.service';

describe('ContactappserviceService', () => {
  let service: ContactappserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactappserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
