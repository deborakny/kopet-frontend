import { PetService } from 'src/app/core/services/pet.service';
import { Pet } from 'src/app/core/types/pet';
import { Component, Input } from '@angular/core';
import { ContaService } from 'src/app/core/services/conta.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmaExclusaoDialogComponent } from '../confirma-exclusao-dialog/confirma-exclusao-dialog.component';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-pet',
  templateUrl: './card-pet.component.html',
  styleUrls: ['./card-pet.component.scss']
})
export class CardPetComponent {
  @Input() pet: any;
  clienteId?: number;
  // confirmaExclusao?: BehaviorSubject<boolean>;

  constructor(
    private contaService: ContaService,
    public dialog: MatDialog,
    private petService: PetService,
    private snackbar: MatSnackBar
  ) {
    this.clienteId = contaService.getId();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmaExclusaoDialogComponent, {
      width: '250px',
    });
    dialogRef.componentInstance.confirmaExclusao.subscribe(
      res => {
        if (res) {
          this.petService.excluir(this.pet.id).subscribe({
            next: (value) => {
              console.log('Excluído');
              this.snackbar.open('Pet excluído', '', {
                horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
              });
              window.location.reload();
            },
            error: (err) => {
              console.log('erro', err)
            }
          })
        }
      }
    );
  }
}
