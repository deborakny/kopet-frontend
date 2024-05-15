import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarPetComponent } from './selecionar-pet.component';

describe('SelecionarPetComponent', () => {
  let component: SelecionarPetComponent;
  let fixture: ComponentFixture<SelecionarPetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecionarPetComponent]
    });
    fixture = TestBed.createComponent(SelecionarPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
