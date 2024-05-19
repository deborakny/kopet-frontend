import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipHoraComponent } from './chip-hora.component';

describe('ChipHoraComponent', () => {
  let component: ChipHoraComponent;
  let fixture: ComponentFixture<ChipHoraComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChipHoraComponent]
    });
    fixture = TestBed.createComponent(ChipHoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
