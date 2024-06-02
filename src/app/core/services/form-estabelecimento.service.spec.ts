import { TestBed } from '@angular/core/testing';

import { FormEstabelecimentoService } from './form-estabelecimento.service';

describe('FormEstabelecimentoService', () => {
  let service: FormEstabelecimentoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormEstabelecimentoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
