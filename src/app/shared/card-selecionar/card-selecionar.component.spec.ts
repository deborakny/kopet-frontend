import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSelecionarComponent } from './card-selecionar.component';

describe('CardSelecionarComponent', () => {
  let component: CardSelecionarComponent;
  let fixture: ComponentFixture<CardSelecionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardSelecionarComponent]
    });
    fixture = TestBed.createComponent(CardSelecionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
