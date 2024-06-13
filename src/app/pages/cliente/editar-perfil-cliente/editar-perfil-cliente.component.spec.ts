import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilClienteComponent } from './editar-perfil-cliente.component';

describe('EditarPerfilClienteComponent', () => {
  let component: EditarPerfilClienteComponent;
  let fixture: ComponentFixture<EditarPerfilClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPerfilClienteComponent]
    });
    fixture = TestBed.createComponent(EditarPerfilClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
