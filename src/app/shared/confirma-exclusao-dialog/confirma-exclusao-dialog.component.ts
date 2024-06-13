import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PetService } from 'src/app/core/services/pet.service';

@Component({
  selector: 'app-confirma-exclusao-dialog',
  templateUrl: './confirma-exclusao-dialog.component.html',
  styleUrls: ['./confirma-exclusao-dialog.component.scss']
})
export class ConfirmaExclusaoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmaExclusaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
    private petService: PetService,
  ) { }

  confirma() {
    if (this.id) {
      this.petService.excluir(this.id).subscribe({
        next: (value) => {
          console.log('Excluído')
          window.location.reload();
        },
        error: (err) => {
          console.log('erro', err)
        }
      })
    }
  }

}
