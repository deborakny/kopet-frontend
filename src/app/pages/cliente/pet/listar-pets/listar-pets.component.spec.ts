import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPetsComponent } from './listar-pets.component';

describe('ListarPetsComponent', () => {
  let component: ListarPetsComponent;
  let fixture: ComponentFixture<ListarPetsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarPetsComponent]
    });
    fixture = TestBed.createComponent(ListarPetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
