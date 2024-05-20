import { OpcaoDisponibilidade } from 'src/app/core/types/opcao-disponibilidade';
import { OpcaoDisponibilidadeService } from '../../../core/services/opcao-disponibilidade.service';
import { Component, OnInit } from '@angular/core';
import { HorarioDisponivel } from 'src/app/core/types/horario-disponivel';
import * as moment from 'moment';
import { FormControl } from '@angular/forms';

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

  constructor(
    private opcaoDisponibilidadeService: OpcaoDisponibilidadeService
  ){}

  ngOnInit(): void {
    this.opcaoDisponibilidadeService.listar(5, 6).subscribe(res => {
      console.log(res)
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
    this.atualizarHorario(dataSelecionada);
    // dataform=dataSelecionada
  }
}
