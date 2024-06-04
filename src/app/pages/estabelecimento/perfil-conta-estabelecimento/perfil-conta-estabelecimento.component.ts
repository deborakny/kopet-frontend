import { Component, OnInit } from '@angular/core';
import { ContaService } from 'src/app/core/services/conta.service';

@Component({
  selector: 'app-perfil-conta-estabelecimento',
  templateUrl: './perfil-conta-estabelecimento.component.html',
  styleUrls: ['./perfil-conta-estabelecimento.component.scss']
})
export class PerfilContaEstabelecimentoComponent implements OnInit {
  panelOpenState = false;
  usuarioLogado?: boolean;

  constructor(
    private contaService: ContaService
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.contaService.logado()
  }



}
