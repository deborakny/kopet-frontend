import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarPetComponent } from './editar-pet.component';

describe('EditarPetComponent', () => {
  let component: EditarPetComponent;
  let fixture: ComponentFixture<EditarPetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarPetComponent]
    });
    fixture = TestBed.createComponent(EditarPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
