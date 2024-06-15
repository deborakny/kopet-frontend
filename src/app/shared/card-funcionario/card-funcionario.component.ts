import { Component, Input, OnInit } from '@angular/core';
import { ContaService } from 'src/app/core/services/conta.service';

@Component({
  selector: 'app-card-funcionario',
  templateUrl: './card-funcionario.component.html',
  styleUrls: ['./card-funcionario.component.scss']
})
export class CardFuncionarioComponent implements OnInit{
  @Input() funcionario?: any;

  estabelecimentoLogado?: boolean;
  estabelecimentoId?: number;

  constructor(
    private contaService: ContaService
  ) { }


  ngOnInit(): void {
    this.estabelecimentoLogado = this.contaService.logado() && this.contaService.getTipoEstabelecimento();
    this.estabelecimentoId = this.contaService.getId();
  }
}
