import { Component, OnInit } from '@angular/core';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento.service';
import { Estabelecimento } from 'src/app/core/types/estabelecimento';

@Component({
  selector: 'app-lista-estabelecimentos',
  templateUrl: './lista-estabelecimentos.component.html',
  styleUrls: ['./lista-estabelecimentos.component.scss']
})
export class ListaEstabelecimentosComponent implements OnInit {

  estabelecimentos: Estabelecimento[] = []

  constructor(
    private estabelecimentoService: EstabelecimentoService
  ) { }


  ngOnInit(): void {
    this.estabelecimentoService.listar().subscribe(
      res => {
        this.estabelecimentos = res
      }
    )
  }

}
