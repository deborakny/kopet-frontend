import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisponibilidadeComponent } from './card-disponibilidade.component';

describe('CardDisponibilidadeComponent', () => {
  let component: CardDisponibilidadeComponent;
  let fixture: ComponentFixture<CardDisponibilidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDisponibilidadeComponent]
    });
    fixture = TestBed.createComponent(CardDisponibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
