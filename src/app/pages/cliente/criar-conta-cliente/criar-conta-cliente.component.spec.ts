import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContaClienteComponent } from './criar-conta-cliente.component';

describe('CriarContaClienteComponent', () => {
  let component: CriarContaClienteComponent;
  let fixture: ComponentFixture<CriarContaClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarContaClienteComponent]
    });
    fixture = TestBed.createComponent(CriarContaClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
