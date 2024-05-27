import { TestBed } from '@angular/core/testing';

import { AutenticacaoInterceptor } from './autenticacao.interceptor';

describe('AutenticacaoService', () => {
  let service: AutenticacaoInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AutenticacaoInterceptor);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
