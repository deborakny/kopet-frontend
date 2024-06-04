import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilContaEstabelecimentoComponent } from './perfil-conta-estabelecimento.component';

describe('PerfilContaEstabelecimentoComponent', () => {
  let component: PerfilContaEstabelecimentoComponent;
  let fixture: ComponentFixture<PerfilContaEstabelecimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilContaEstabelecimentoComponent]
    });
    fixture = TestBed.createComponent(PerfilContaEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
