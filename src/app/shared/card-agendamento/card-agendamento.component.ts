import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmaAcaoDialogComponent } from '../confirma-acao-dialog/confirma-acao-dialog.component';
import { StatusAgendamentoEnum } from 'src/app/core/types/enum/status-agendamento.enum';

@Component({
  selector: 'app-card-agendamento',
  templateUrl: './card-agendamento.component.html',
  styleUrls: ['./card-agendamento.component.scss']
})
export class CardAgendamentoComponent implements OnInit{
  @Input() agendamento: any;
  @Input() tipoEstabelecimento!: boolean;

  constructor(
    public dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  openDialog(): void {
    this.dialog.open(ConfirmaAcaoDialogComponent, {
      width: '250px',
      data: +this.agendamento.id
    })
  }

  public get status(): typeof StatusAgendamentoEnum {
    return StatusAgendamentoEnum
  }
}
