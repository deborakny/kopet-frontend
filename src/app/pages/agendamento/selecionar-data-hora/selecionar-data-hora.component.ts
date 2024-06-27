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
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';

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
  estabelecimentoId!: number;
  isLoading = true;

  constructor(
    private opcaoDisponibilidadeService: OpcaoDisponibilidadeService,
    private formAgendamentoService: FormAgendamentoService,
    private agendamentoService: AgendamentoService,
    private snackbar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private contaService: ContaService
  ){}

  ngOnInit(): void {
    this.estabelecimentoId = parseInt(this.route.snapshot.paramMap.get('id')!);

    console.log(this.formAgendamentoService.getControl('estabelecimentoId').value);

    if (!this.formAgendamentoService.getControl('estabelecimentoId').value) {
      this.formAgendamentoService.setControlNumber('estabelecimentoId', this.estabelecimentoId);
      console.log(this.formAgendamentoService.getControl('estabelecimentoId').value);
    }

    this.horaControl = this.formAgendamentoService.getControl('hora');

    this.dataControl = this.formAgendamentoService.getControl('dia');

    const idServico = this.formAgendamentoService.getControl('servicoId').value;
    const idFuncionario = this.formAgendamentoService.getControl('funcionarioId').value;
    console.log('idServico ', idServico, 'idFuncionario ', idFuncionario)

    if (idServico && idFuncionario) {
      this.opcaoDisponibilidadeService.listar(idServico, idFuncionario).subscribe(res => {
        setTimeout(() => {
          this.opcoesDisponibilidade = res;
          this.atualizarHorario(moment().toDate());
          console.log('res: ', res)
          console.log('opcoes: ', this.opcoesDisponibilidade)
          this.isLoading = false;
        }, 1000)
      });
    } else {
      this.router.navigate([
        `/estabelecimento/${this.estabelecimentoId}/agendamento/selecionar-servico-colaborador`,
      ]);
    }

    const formAgendamentoGroup = this.formAgendamentoService.getForm()
    console.log('e', formAgendamentoGroup?.getRawValue());
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
            this.formAgendamentoService.clearForm();
            const id = this.contaService.getId();
            this.router.navigate([`/perfil/${id}/lista-agendamentos`]);
          },
          error: (e) => {
            this.snackbar.open('Não foi possível realizar o agendamento', '', {
              horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
             });
          }
        }
      )
    } else {
      console.log('e', formAgendamentoGroup?.getRawValue());
      this.snackbar.open('Selecione Data e Hora para o agendamento', '', {
        horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
       });
    }

  }
}
