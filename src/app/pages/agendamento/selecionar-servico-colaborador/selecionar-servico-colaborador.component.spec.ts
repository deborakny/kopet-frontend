import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarServicoColaboradorComponent } from './selecionar-servico-colaborador.component';

describe('SelecionarServicoColaboradorComponent', () => {
  let component: SelecionarServicoColaboradorComponent;
  let fixture: ComponentFixture<SelecionarServicoColaboradorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecionarServicoColaboradorComponent]
    });
    fixture = TestBed.createComponent(SelecionarServicoColaboradorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
