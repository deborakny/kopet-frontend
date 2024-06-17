import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarDisponibilidadeComponent } from './listar-disponibilidade.component';

describe('ListarDisponibilidadeComponent', () => {
  let component: ListarDisponibilidadeComponent;
  let fixture: ComponentFixture<ListarDisponibilidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarDisponibilidadeComponent]
    });
    fixture = TestBed.createComponent(ListarDisponibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
