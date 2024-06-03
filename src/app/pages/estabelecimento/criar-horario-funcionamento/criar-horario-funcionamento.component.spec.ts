import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarHorarioFuncionamentoComponent } from './criar-horario-funcionamento.component';

describe('CriarHorarioFuncionamentoComponent', () => {
  let component: CriarHorarioFuncionamentoComponent;
  let fixture: ComponentFixture<CriarHorarioFuncionamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarHorarioFuncionamentoComponent]
    });
    fixture = TestBed.createComponent(CriarHorarioFuncionamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
