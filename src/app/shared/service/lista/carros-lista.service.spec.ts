import { TestBed } from '@angular/core/testing';

import { CarrosListaService } from './carros-lista.service';

describe('CarrosListaService', () => {
  let service: CarrosListaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarrosListaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
