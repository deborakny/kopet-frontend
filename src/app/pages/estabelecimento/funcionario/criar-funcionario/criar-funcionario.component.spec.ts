import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarFuncionarioComponent } from './criar-funcionario.component';

describe('CriarFuncionarioComponent', () => {
  let component: CriarFuncionarioComponent;
  let fixture: ComponentFixture<CriarFuncionarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CriarFuncionarioComponent]
    });
    fixture = TestBed.createComponent(CriarFuncionarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
