import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContaService } from 'src/app/core/services/conta.service';
import { Disponibilidade } from 'src/app/core/types/disponibilidade';
import { DiaDaSemana } from 'src/app/core/types/enum/dia-da-semana.enum';
import { ConfirmaExclusaoDialogComponent } from '../confirma-exclusao-dialog/confirma-exclusao-dialog.component';
import { DisponibilidadeService } from 'src/app/core/services/disponibilidade.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-card-disponibilidade',
  templateUrl: './card-disponibilidade.component.html',
  styleUrls: ['./card-disponibilidade.component.scss']
})
export class CardDisponibilidadeComponent implements OnInit{

  @Input() disponibilidade?: Disponibilidade;
  panelOpenState = false;
  estabelecimentoId?: number;

  constructor(
    private contaService: ContaService,
    public dialog: MatDialog,
    private disponibilidadeService: DisponibilidadeService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.estabelecimentoId = this.contaService.getId();
  }

  getNomeDia(dia: number): string {
    const nomeDia = DiaDaSemana[dia];
    return nomeDia;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmaExclusaoDialogComponent, {
      width: '250px',
    });
    dialogRef.componentInstance.confirmaExclusao.subscribe(
      res => {
        if (res) {
          this.disponibilidadeService.excluir(this.disponibilidade!.id!).subscribe({
            next: (value) => {
              console.log('Excluído');
              this.snackbar.open('Disponibilidade excluída', '', {
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
