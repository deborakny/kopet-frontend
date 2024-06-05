import { ServicoService } from 'src/app/core/services/servico.service';
import { Servico } from './../../../../core/types/servico';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContaService } from 'src/app/core/services/conta.service';

@Component({
  selector: 'app-criar-funcionario',
  templateUrl: './criar-funcionario.component.html',
  styleUrls: ['./criar-funcionario.component.scss']
})
export class CriarFuncionarioComponent implements OnInit{

  usuarioLogado?: boolean;
  servicosList: Servico[] = [];

  constructor(
    private contaService: ContaService,
    private servicoService: ServicoService
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.contaService.logado();

    // const estabelecimentoId = this.contaService.getId();

    const estabelecimentoId = 31;
    this.getServicos(estabelecimentoId);
  }

  getServicos(id: number) {
    this.servicoService.getServicosByEstabelecimento(id).subscribe(res => {
      this.servicosList = res
    })
  }

}
