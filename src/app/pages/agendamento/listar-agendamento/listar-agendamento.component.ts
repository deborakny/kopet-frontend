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
  tipoEstabelecimento!: boolean;
  agendamentos: Agendamento[] = [];

  constructor(
    private contaService: ContaService,
    private agendamentoService: AgendamentoService
  ) { }

  ngOnInit(): void {
    //const contaId = this.contaService.getId();
    const contaId = 18;
    //this.tipoEstabelecimento = this.contaService.getTipoEstabelecimento();
    this.tipoEstabelecimento = false;
    this.usuarioLogado = this.contaService.logado();

    if (this.tipoEstabelecimento) {
      this.getAgendamentosEstabelecimento(contaId)
    } else {
      this.getAgendamentosCliente(contaId)
    }
  }

  getAgendamentosCliente(id: number) {
    this.agendamentoService.listarPorClienteId(id).subscribe(
      res => {
        this.agendamentos = res
      }
    )
  }

  getAgendamentosEstabelecimento(id: number) {
    this.agendamentoService.listarPorEstabelecimentoId(id).subscribe(
      res => {
        this.agendamentos = res
      }
    )
  }

}
