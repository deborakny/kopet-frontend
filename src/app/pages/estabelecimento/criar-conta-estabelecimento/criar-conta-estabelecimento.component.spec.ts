import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContaEstabelecimentoComponent } from './criar-conta-estabelecimento.component';

describe('CriarContaEstabelecimentoComponent', () => {
  let component: CriarContaEstabelecimentoComponent;
  let fixture: ComponentFixture<CriarContaEstabelecimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarContaEstabelecimentoComponent]
    });
    fixture = TestBed.createComponent(CriarContaEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
