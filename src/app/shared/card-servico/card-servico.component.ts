import { Component, Input, OnInit } from '@angular/core';
import { ContaService } from 'src/app/core/services/conta.service';

@Component({
  selector: 'app-card-servico',
  templateUrl: './card-servico.component.html',
  styleUrls: ['./card-servico.component.scss']
})
export class CardServicoComponent implements OnInit{

  @Input() servico?: any;
  valorString: string = '';

  estabelecimentoLogado?: boolean;
  estabelecimentoId?: number;

  constructor(
    private contaService: ContaService
  ) { }

  ngOnInit(): void {
    this.estabelecimentoLogado = this.contaService.logado() && this.contaService.getTipoEstabelecimento();
    this.estabelecimentoId = this.contaService.getId();
    // if (this.servico.valor) {
    //   this.valorString = `R$ ${this.servico.valor}`
    // } else {
    //   this.valorString = "Não informado"
    // }
  }


}
