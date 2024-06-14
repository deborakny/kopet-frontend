import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPerfilEstabelecimentoComponent } from './editar-perfil-estabelecimento.component';

describe('EditarPerfilEstabelecimentoComponent', () => {
  let component: EditarPerfilEstabelecimentoComponent;
  let fixture: ComponentFixture<EditarPerfilEstabelecimentoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPerfilEstabelecimentoComponent]
    });
    fixture = TestBed.createComponent(EditarPerfilEstabelecimentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
