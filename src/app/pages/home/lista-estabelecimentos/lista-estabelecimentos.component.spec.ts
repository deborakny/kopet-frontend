import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEstabelecimentosComponent } from './lista-estabelecimentos.component';

describe('ListaEstabelecimentosComponent', () => {
  let component: ListaEstabelecimentosComponent;
  let fixture: ComponentFixture<ListaEstabelecimentosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaEstabelecimentosComponent]
    });
    fixture = TestBed.createComponent(ListaEstabelecimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
