import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstabelecimentoPerfilComponent } from './estabelecimento-perfil.component';

describe('EstabelecimentoPerfilComponent', () => {
  let component: EstabelecimentoPerfilComponent;
  let fixture: ComponentFixture<EstabelecimentoPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EstabelecimentoPerfilComponent]
    });
    fixture = TestBed.createComponent(EstabelecimentoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
