import { TestBed } from '@angular/core/testing';

import { FormAgendamentoService } from './form-agendamento.service';

describe('FormAgendamentoService', () => {
  let service: FormAgendamentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormAgendamentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
