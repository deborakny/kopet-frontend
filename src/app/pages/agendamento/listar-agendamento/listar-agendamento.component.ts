import { Component, OnInit } from '@angular/core';
import { AgendamentoService } from 'src/app/core/services/agendamento.service';
import { ContaService } from 'src/app/core/services/conta.service';
import { Agendamento } from 'src/app/core/types/agendamento';

@Component({
  selector: 'app-listar-agendamento',
  templateUrl: './listar-agendamento.component.html',
  styleUrls: ['./listar-agendamento.component.scss']
})
export class ListarAgendamentoComponent implements OnInit{

  usuarioLogado?: boolean;
  tipoEstabelecimento?: boolean;
  agendamentos: Agendamento[] = [];
  isLoading = true;

  constructor(
    private contaService: ContaService,
    private agendamentoService: AgendamentoService
  ) { }

  ngOnInit(): void {
    const contaId = this.contaService.getId();
    this.tipoEstabelecimento = this.contaService.getTipoEstabelecimento();
    this.usuarioLogado = this.contaService.logado();

    if (contaId) {
      console.log('tem id', contaId)
      if (this.tipoEstabelecimento) {
        this.getAgendamentosEstabelecimento(contaId)
      } else {
        this.getAgendamentosCliente(contaId)
      }
    }
  }

  getAgendamentosCliente(id: number) {
    this.agendamentoService.listarPorClienteId(id).subscribe(
      res => {
        setTimeout(() => {
          this.agendamentos = res;
          this.isLoading = false;
        }, 1000)
      }
    )
  }

  getAgendamentosEstabelecimento(id: number) {
    this.agendamentoService.listarPorEstabelecimentoId(id).subscribe(
      res => {
        setTimeout(() => {
          this.agendamentos = res;
          this.isLoading = false;
        }, 1000)
      }
    )
  }

}
