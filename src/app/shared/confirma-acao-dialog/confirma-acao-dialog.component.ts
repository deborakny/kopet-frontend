import { Component, Inject, inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendamentoService } from 'src/app/core/services/agendamento.service';
import { Agendamento } from 'src/app/core/types/agendamento';
import { StatusAgendamentoEnum } from 'src/app/core/types/enum/status-agendamento.enum';

@Component({
  selector: 'app-confirma-acao-dialog',
  templateUrl: './confirma-acao-dialog.component.html',
  styleUrls: ['./confirma-acao-dialog.component.scss']
})
export class ConfirmaAcaoDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<ConfirmaAcaoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public id: number,
    private agendamentoService: AgendamentoService,
  ) { }

  confirmar() {
    console.log(typeof this.id)
    const agendamento = {
      status: StatusAgendamentoEnum.CANCELADO
    } as Agendamento
    this.agendamentoService.atualizar(this.id, agendamento).subscribe(
      {
        next(value) {
          console.log(value);
          window.location.reload();
        },
        error(e) {
          console.log(e)
        }
      }
    )
  }

}
