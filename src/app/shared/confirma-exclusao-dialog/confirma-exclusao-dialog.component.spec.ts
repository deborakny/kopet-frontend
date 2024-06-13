import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaExclusaoDialogComponent } from './confirma-exclusao-dialog.component';

describe('ConfirmaExclusaoDialogComponent', () => {
  let component: ConfirmaExclusaoDialogComponent;
  let fixture: ComponentFixture<ConfirmaExclusaoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmaExclusaoDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmaExclusaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
