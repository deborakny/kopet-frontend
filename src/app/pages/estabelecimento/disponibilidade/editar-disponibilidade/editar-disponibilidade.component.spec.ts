import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarDisponibilidadeComponent } from './editar-disponibilidade.component';

describe('EditarDisponibilidadeComponent', () => {
  let component: EditarDisponibilidadeComponent;
  let fixture: ComponentFixture<EditarDisponibilidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarDisponibilidadeComponent]
    });
    fixture = TestBed.createComponent(EditarDisponibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
