import { Pet } from 'src/app/core/types/pet';
import { Component, Input } from '@angular/core';
import { ContaService } from 'src/app/core/services/conta.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmaExclusaoDialogComponent } from '../confirma-exclusao-dialog/confirma-exclusao-dialog.component';

@Component({
  selector: 'app-card-pet',
  templateUrl: './card-pet.component.html',
  styleUrls: ['./card-pet.component.scss']
})
export class CardPetComponent {
  @Input() pet: any;
  clienteId?: number;

  constructor(
    private contaService: ContaService,
    public dialog: MatDialog,
  ) {
    this.clienteId = contaService.getId();
  }

  openDialog(): void {
    this.dialog.open(ConfirmaExclusaoDialogComponent, {
      width: '250px',
      data: this.pet.id
    })
  }
}
