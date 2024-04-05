import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPetshopComponent } from './card-petshop.component';

describe('CardPetshopComponent', () => {
  let component: CardPetshopComponent;
  let fixture: ComponentFixture<CardPetshopComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardPetshopComponent]
    });
    fixture = TestBed.createComponent(CardPetshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
