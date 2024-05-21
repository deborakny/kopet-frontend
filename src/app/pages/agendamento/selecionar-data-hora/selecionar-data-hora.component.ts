import { OpcaoDisponibilidade } from 'src/app/core/types/opcao-disponibilidade';
import { OpcaoDisponibilidadeService } from '../../../core/services/opcao-disponibilidade.service';
import { Component, OnInit } from '@angular/core';
import { HorarioDisponivel } from 'src/app/core/types/horario-disponivel';
import * as moment from 'moment';
import { FormControl } from '@angular/forms';
import { FormAgendamentoService } from 'src/app/core/services/form-agendamento.service';
import { Agendamento } from 'src/app/core/types/agendamento';
import { AgendamentoService } from 'src/app/core/services/agendamento.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selecionar-data-hora',
  templateUrl: './selecionar-data-hora.component.html',
  styleUrls: ['./selecionar-data-hora.component.scss']
})
export class SelecionarDataHoraComponent implements OnInit{
  usuarioLogado: boolean = true;
  opcoesDisponibilidade: OpcaoDisponibilidade[] = [];
  horasDisponiveis: HorarioDisponivel[] = [];
  horaControl = new FormControl();
  dataControl = new FormControl();

  constructor(
    private opcaoDisponibilidadeService: OpcaoDisponibilidadeService,
    private formAgendamentoService: FormAgendamentoService,
    private agendamentoService: AgendamentoService,
    private snackbar: MatSnackBar,
    private router: Router
  ){}

  ngOnInit(): void {
    this.horaControl = this.formAgendamentoService.getControl('hora');

    this.dataControl = this.formAgendamentoService.getControl('dia');

    this.opcaoDisponibilidadeService.listar(5, 6).subscribe(res => {
      this.opcoesDisponibilidade = res
      this.atualizarHorario(moment().toDate())
    });
  }

  atualizarHorario(data: Date | null) {
    this.opcoesDisponibilidade.forEach((opcao) => {
      const dia = opcao.dataDia.includes(moment(data).format("YYYY-MM-DD"))
      if (dia) {
        this.horasDisponiveis = opcao.horarios;
      }
    });
  }

  onSelected(dataSelecionada: Date | null) {
    this.dataControl.setValue(moment(dataSelecionada).format('DD/MM/YYYY'))
    this.atualizarHorario(dataSelecionada);
    // dataform=dataSelecionada
  }

  onSubmitHandler() {
    const formAgendamentoGroup = this.formAgendamentoService.getForm();
    if (formAgendamentoGroup?.valid) {
      const agendamento = formAgendamentoGroup.getRawValue() as Agendamento;
      this.agendamentoService.criar(agendamento).subscribe(
        {
          next: (value) => {
            this.snackbar.open('Agendamento realizado com sucesso', '', {
              horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
            });
            this.router.navigate(['/'])
          },
          error: (e) => {
            this.snackbar.open('Não foi possível realizar o agendamento', '', {
              horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
             });
          }
        }
      )
    } else {
      console.log('e', formAgendamentoGroup?.getRawValue())
    }

  }
}
