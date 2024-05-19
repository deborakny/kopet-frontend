import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento.service';
import { Estabelecimento } from 'src/app/core/types/estabelecimento';

@Component({
  selector: 'app-lista-estabelecimentos',
  templateUrl: './lista-estabelecimentos.component.html',
  styleUrls: ['./lista-estabelecimentos.component.scss']
})
export class ListaEstabelecimentosComponent implements OnInit {

  estabelecimentos: Estabelecimento[] = [];
  estabelecimentosFiltrados: Estabelecimento[] = [];
  @Input() buscaControl: FormControl = new FormControl('');

  constructor(
    private estabelecimentoService: EstabelecimentoService
  ) { }


  ngOnInit(): void {
    this.estabelecimentoService.listar().subscribe(
      res => {
        this.estabelecimentos = res;

      }
    );

    this.atualizarFiltro().subscribe(res => {
      this.estabelecimentosFiltrados = res
    });
  }

  atualizarFiltro(): Observable<any> {
    return this.buscaControl.valueChanges.pipe(
      startWith(''),
      map((valorBusca) => {
        return this.filtrar(valorBusca as string || '')
      })
    );
  }

  filtrar(busca: string): any[] {
    console.log(busca);
    if (busca === '') {
      return [];
    }
    const buscaMinuscula = busca.toLowerCase();
    const estabelecimentosFiltrados = this.estabelecimentos.filter(estabelecimento => {
      return estabelecimento.nome.toLowerCase().includes(buscaMinuscula)
    });
    return estabelecimentosFiltrados;
  }

}
