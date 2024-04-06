import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBuscaLojaComponent } from './form-busca-loja.component';

describe('FormBuscaLojaComponent', () => {
  let component: FormBuscaLojaComponent;
  let fixture: ComponentFixture<FormBuscaLojaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormBuscaLojaComponent]
    });
    fixture = TestBed.createComponent(FormBuscaLojaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
