import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmaAcaoDialogComponent } from './confirma-acao-dialog.component';

describe('ConfirmaAcaoDialogComponent', () => {
  let component: ConfirmaAcaoDialogComponent;
  let fixture: ComponentFixture<ConfirmaAcaoDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmaAcaoDialogComponent]
    });
    fixture = TestBed.createComponent(ConfirmaAcaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
