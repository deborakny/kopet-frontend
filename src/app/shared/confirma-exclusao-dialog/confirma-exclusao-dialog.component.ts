import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { PetService } from 'src/app/core/services/pet.service';

@Component({
  selector: 'app-confirma-exclusao-dialog',
  templateUrl: './confirma-exclusao-dialog.component.html',
  styleUrls: ['./confirma-exclusao-dialog.component.scss']
})
export class ConfirmaExclusaoDialogComponent {

  @Output() confirmaExclusao = new EventEmitter<boolean>();

  constructor(
    public dialogRef: MatDialogRef<ConfirmaExclusaoDialogComponent>,
    private petService: PetService,
  ) { }

  confirma() {
    console.log('confirmado');
    this.confirmaExclusao.emit(true);
  }

}
