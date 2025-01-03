import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibilidadeComponent } from './disponibilidade.component';

describe('DisponibilidadeComponent', () => {
  let component: DisponibilidadeComponent;
  let fixture: ComponentFixture<DisponibilidadeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisponibilidadeComponent]
    });
    fixture = TestBed.createComponent(DisponibilidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
