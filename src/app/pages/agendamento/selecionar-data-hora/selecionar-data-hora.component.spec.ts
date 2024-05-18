import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecionarDataHoraComponent } from './selecionar-data-hora.component';

describe('SelecionarDataHoraComponent', () => {
  let component: SelecionarDataHoraComponent;
  let fixture: ComponentFixture<SelecionarDataHoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecionarDataHoraComponent]
    });
    fixture = TestBed.createComponent(SelecionarDataHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
