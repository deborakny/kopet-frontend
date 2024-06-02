import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarEnderecoEstabelecimentoComponent } from './criar-endereco-estabelecimento.component';

describe('CriarEnderecoEstabelecimentoComponent', () => {
  let component: CriarEnderecoEstabelecimentoComponent;
  let fixture: ComponentFixture<CriarEnderecoEstabelecimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarEnderecoEstabelecimentoComponent]
    });
    fixture = TestBed.createComponent(CriarEnderecoEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
