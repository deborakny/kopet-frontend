import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento.service';
import { DiaDaSemana } from 'src/app/core/types/enum/dia-da-semana.enum';
import { Estabelecimento } from 'src/app/core/types/estabelecimento';

@Component({
  selector: 'app-estabelecimento-perfil',
  templateUrl: './estabelecimento-perfil.component.html',
  styleUrls: ['./estabelecimento-perfil.component.scss'],
})

export class EstabelecimentoPerfilComponent implements OnInit {
  usuarioLogado: boolean = true;
  enderecoString: string = '';
  estabelecimento?: Estabelecimento;

  servicos: any[] = [
    {
      nome: 'banho e tosa',
      valor: '75,00'
    },
    {
      nome: 'consulta veterinária',
      valor: '80,00'
    },
    {
      nome: 'banho e tosa',
      valor: '75,00'
    },
    {
      nome: 'consulta veterinária',
      valor: '80,00'
    },
    {
      nome: 'banho e tosa',
      valor: '75,00'
    },
    {
      nome: 'consulta veterinária',
      valor: '80,00'
    },
  ]

  panelOpenState = false

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.estabelecimentoService.getEstabelecimentoById(parseInt(id!)).subscribe(
      res => {
        this.estabelecimento = res;
        if (this.estabelecimento!.endereco.complemento) {
          this.enderecoString = `${this.estabelecimento!.endereco.logradouro},
          ${this.estabelecimento!.endereco.numero},
          ${this.estabelecimento!.endereco.complemento},
          ${this.estabelecimento!.endereco.bairro},
          ${this.estabelecimento!.endereco.cidade},
          ${this.estabelecimento!.endereco.estado}`
        } else {
          this.enderecoString = `${this.estabelecimento!.endereco.logradouro},
          ${this.estabelecimento!.endereco.numero},
          ${this.estabelecimento!.endereco.bairro},
          ${this.estabelecimento!.endereco.cidade},
          ${this.estabelecimento!.endereco.estado}`
        }
      }
    )
  }

  getNomeDia(dia: number): string {
    const nomeDia = DiaDaSemana[dia];
    return nomeDia;
  }

}
