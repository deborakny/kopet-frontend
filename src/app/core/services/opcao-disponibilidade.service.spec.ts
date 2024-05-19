import { TestBed } from '@angular/core/testing';

import { OpcaoDisponibilidadeService } from './opcao-disponibilidade.service';

describe('OpcaoDisponibilidadeService', () => {
  let service: OpcaoDisponibilidadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpcaoDisponibilidadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
