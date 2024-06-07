import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAgendamentoComponent } from './card-agendamento.component';

describe('CardAgendamentoComponent', () => {
  let component: CardAgendamentoComponent;
  let fixture: ComponentFixture<CardAgendamentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardAgendamentoComponent]
    });
    fixture = TestBed.createComponent(CardAgendamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
